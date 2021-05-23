import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

const StudentsView = (props) => {
  const {student} = props;

return (
  <div>      
    <div className="navigationBar" style={{flexGrow: '1'}}>
        <AppBar position="static" elevation={0} style={{backgroundColor: '#11153e', shadows:'none'}}>
          <Toolbar>
            <Link to={'/'} style={{textDecoration: 'none'}} >
              <Typography variant="h6" style={{textAlign:'left', fontType: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '35px', color:"#CDDC39"}}>
                CRUD App
              </Typography>
            </Link>
          <div className="navButtons" style={{marginRight: '10px'}}>
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
    <h1>{student.firstname} {student.lastname}</h1>
    <img src={student.imageUrl} alt="student' image" width="150" height="150" />
    <p>Email: {student.email}</p>
    <p>GPA: {student.gpa}</p>   
  </div>
  );
};


export default StudentsView;