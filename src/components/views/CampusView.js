import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import axios from "axios";

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

const CampusView = (props) => {
  const {campus} = props;
  
  return (
    <div>      
      <div className="navigationBar" style={{flexGrow: '1'}}>
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
      <button onClick={() => deleteCampus(campus.id)}>Delete Campus</button>
      <h1>{campus.name}</h1>
      <img src={campus.imageUrl} alt="campuses' image" width="150" height="150" />
      <p>Address: {campus.address}</p>
      <p>Description: {campus.description}</p>

      <h2>Students on campus</h2>
      <ul>
      {campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <li key={student.id}>
            <Link to={`/student/${student.id}`}>
                <p>{name}</p>
            </Link>
            <img src={student.imageUrl} alt="student's image" width="150" height="150" />
            </li>
        );
      })}
      </ul>
    </div>
  );

};

export default CampusView;