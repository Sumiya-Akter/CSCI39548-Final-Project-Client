import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { TextField } from '@material-ui/core';
import axios from 'axios';

const deleteCampus = async (id) => {
  await axios
    .delete(`/api/campuses/${id}`)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
  window.location.replace(`/campuses`);
};

class AllCampusesView extends Component {
  constructor(props){
    super(props);
    this.state = {
      addingCampus: false,
      cName: "",
      cImg: "",
      cAddress: "",
      cDescription: ""
    }
  }

  componentDidMount = async () => {
    if (!this.props.allCampuses.length) {
      return <div>There are no campuses.</div>;
    }
  }

  changeCName = (event) => {
    this.setState({ cName: event.target.value })
  }
  changeCImg = (event) => {
    this.setState({ cImg: event.target.value })
  }
  changeCAddress = (event) => {
    this.setState({ cAddress: event.target.value })
  }
  changeCDescription = (event) => {
    this.setState({ cDescription: event.target.value })
  }

  startAdd = () => {
    this.setState({
      addingCampus: true,
      cName: "",
      cImg: "",
      cAddress: "",
      cDescription: "",
      cDetails: []
    })
    console.log("Starting Add")
  }

  closeAdd = () => {
    console.log("Closing Add Form")
    this.setState({addingCampus: false})
  }

  addCampus = async(event) => {
    if(this.state.cName==="") this.setState({registerError: "Please enter the campus name"})
    else if(this.state.cAddress==="") this.setState({registerError: "Please enter the campus' address"})
    else {
      console.log("Adding Campus: ",this.state.cName,this.state.cImg,this.state.cAddress,this.state.cDescription)
      event.preventDefault();
      let data = {
        name: this.state.cName,
        address: this.state.cAddress,
        description: this.state.cDescription
      }
      if(this.state.cImg!="") {
        let data = {
          name: this.state.cName,
          imageUrl: this.state.cImg,
          address: this.state.cAddress,
          description: this.state.cDescription
        };
      }
      await axios
        .post(`/api/campuses/`, data)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
        window.location.replace(`/campuses/`);
      this.setState({addingCampus: false})
      }
    }
  
  render() {
    return (
      <div>
        <div className="navigationBar">
          <AppBar position="static" elevation={0} style={{backgroundColor: '#11153e', shadows:'none'}}>
            <Toolbar style={{display:'flex',justifyContent:'space-between'}}>
              <Link to={'/'} style={{textDecoration: 'none'}} >
                <Typography variant="h6" style={{textAlign:'left', fontType: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '35px', color:"#CDDC39"}}>
                  CRUD App
                </Typography>
              </Link>
              <div className="navButtons">
                <Link to={'/campuses'} style={{textDecoration: 'none'}} >
                  <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
                    All Campuses
                  </Button>
                </Link>
                <Link to={'/students'} style={{textDecoration: 'none'}} >
                  <Button variant="contained" color="primary">
                    All Students
                  </Button>
                </Link>
              </div>
            </Toolbar>
          </AppBar>
        </div>
        {this.props.allCampuses.map((campus) => (
          <div key={campus.id}>
            <Link to={`/campus/${campus.id}`}>
              <h1>{campus.name}</h1>
              <img src={campus.imageUrl} alt="campuses' image" width="150" height="150" />
            </Link>
            <Button onClick={() => deleteCampus(campus.id)}>
              X
            </Button>
          </div>
        ))}
        <Button variant="contained" color="primary" onClick={this.startAdd}>
          Add Campus
        </Button>
        <div className="AddCampusComponent">
          <Dialog
            fullWidth
            maxWidth="md"
            open={this.state.addingCampus}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Adding Campus</DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  id="CName"
                  label="Name"
                  type="string"
                  fullWidth
                  onChange={this.changeCName}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="CImg"
                  label="Image Link"
                  type="string"
                  fullWidth
                  onChange={this.changeCImg}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="CAddress"
                  label="Address"
                  type="string"
                  fullWidth
                  onChange={this.changeCAddress}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="CDescription"
                  label="Description"
                  type="string"
                  fullWidth
                  onChange={this.changeCDescription}
                />
              </DialogContent>
            <DialogActions>
              <Button variant="contained" onClick={this.closeAdd}>
                Close
              </Button>
              <Button variant="contained" color="primary" onClick={this.addCampus}>
                Submit
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
  )};
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;