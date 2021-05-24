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
import {Link} from "react-router-dom";
import { TextField } from '@material-ui/core';

import axios from "axios";

const onDelete = async (id) => {
    await axios
        .delete(`/api/students/${id}`)
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {
            console.log(err);
        });
    window.location.replace(`/students`);
};

class AllStudentsView extends Component {
    constructor(props){
        super(props);
        this.state = {
            addingStudent: false,
            sFirstName: "",
            sLastName: "",
            sEmail: "",
            sGPA: 0.0,
            sImg: "https://ualr.edu/elearning/files/2020/10/No-Photo-Available.jpg",
            registerError: ""
        }
    }

    changeFirstName = (event) => {
        this.setState({ sFirstName: event.target.value })
    }
    changeLastName = (event) => {
        this.setState({ sLastName: event.target.value })
    }
    changeEmail = (event) => {
        this.setState({ sEmail: event.target.value })
    }
    changeGPA = (event) => {
        this.setState({ sGPA: event.target.value })
    }
    changeSImg = (event) => {
        this.setState({ sImg: event.target.value })
    }

    startSAdd = () => {
        this.setState({
            addingStudent: true,
            sFirstName: "",
            sLastName: "",
            sEmail: "",
            sGPA: null,
            sImg: "https://ualr.edu/elearning/files/2020/10/No-Photo-Available.jpg"
        })
        console.log("Starting Add Student")
    }

    closeSAdd = () => {
        console.log("Closing Add Student Form")
        this.setState({addingStudent: false})
    }

    addStudent = async(event) => {
        if(this.state.sFirstName==="") this.setState({registerError: "Please enter the student's name"})
        if(this.state.sLastName==="") this.setState({registerError: "Please enter the student's name"})
        else if(this.state.sEmail==="") this.setState({registerError: "Please enter the student's email"})
        else {
            console.log("Adding Student: ", this.state.sFirstName, this.state.sLastName, this.state.sEmail, this.state.sGPA, this.state.sImg)
            event.preventDefault();
            let data = {
                firstname: this.state.sFirstName, 
                lastname: this.state.sLastName, 
                email: this.state.sEmail, 
                gpa: this.state.sGPA, 
                imageUrl: this.state.sImg
            }
      await axios
        .post(`/api/students/`, data)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
        window.location.replace(`/students/`);
        this.setState({addingStudent: false})
      }
    }

    render() {
        return(
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
                <div className="csHeader">
                    <h1 style={{marginLeft: '20px', fontFamily: 'Courier, sans-serif'}}>All Students</h1>
                    <Button variant="contained" color="primary" onClick={this.startSAdd}>
                        Add Student
                    </Button>
                </div>
                <div className="csList">
                    {this.props.allStudents.map((student) => (
                        <div className="studentList csItem" key={student.id}>
                            <div className="csTitle">
                                <Link className="csName" to={`/student/${student.id}`}>
                                    <h2>{student.firstname} {student.lastname}</h2>
                                </Link>
                                <Button className="deleteButton" variant="contained" style={{height:'25px', marginLeft: '10px'}} onClick={() => onDelete(student.id)}>
                                    X
                                </Button>
                            </div>
                            <Link to={`/student/${student.id}`}>
                                <img src={student.imageUrl} alt="No photo provided" width="150" height="150" />
                            </Link>
                        </div>
                    ))}
                </div>
                
                <div className="AddStudentComponent">
                    <Dialog
                        fullWidth
                        maxWidth="md"
                        open={this.state.addingStudent}
                        aria-labelledby="form-dialog-title"
                    >
                        <DialogTitle id="form-dialog-title">Adding Student</DialogTitle>
                        <DialogContent>
                            <TextField
                            autoFocus
                            margin="dense"
                            id="SFirstName"
                            label="First Name"
                            type="string"
                            fullWidth
                            onChange={this.changeFirstName}
                            />
                            <TextField
                            autoFocus
                            margin="dense"
                            id="SLastName"
                            label="Last Name"
                            type="string"
                            fullWidth
                            onChange={this.changeLastName}
                            />
                            <TextField
                            autoFocus
                            margin="dense"
                            id="SEmail"
                            label="Email"
                            type="string"
                            fullWidth
                            onChange={this.changeEmail}
                            />
                            <TextField
                            autoFocus
                            margin="dense"
                            id="SGPA"
                            label="GPA"
                            type="decimal"
                            fullWidth
                            onChange={this.changeGPA}
                            />
                            <TextField
                            autoFocus
                            margin="dense"
                            id="SImg"
                            label="Image Link"
                            type="string"
                            fullWidth
                            onChange={this.changeSImg}
                            />
                            <div style={{color: 'red'}}>
                                {this.state.registerError}
                            </div>
                        </DialogContent>
                        <DialogActions>
                        <Button variant="contained" onClick={this.closeSAdd}>
                            Close
                        </Button>
                        <Button variant="contained" color="primary" onClick={this.addStudent}>
                            Submit
                        </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
        )
    };
};

AllStudentsView.propTypes={
    allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;