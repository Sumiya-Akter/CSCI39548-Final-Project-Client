import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import axios from "axios";

const StudentsView = (props) => {
  const {student} = props;
  // const editingStudent = false;
  // const sFirstName = student.firstname;
  // const sLastName = student.lastname;
  // const sEmail = student.email;
  // const sGPA = student.gpa;
  // const sImg = student.imageUrl;
  // const sCampusName = student.campus.name;

  const deleteStudent = async (id) => {
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
    <div className="csBody">
      <div className="csHeader">
        <h1>{student.firstname} {student.lastname}</h1>
        {/* <Button variant="contained" color="primary" onClick={this.startSEdit}>
          Edit
        </Button> */}
        <Button variant="contained" onClick={() => deleteStudent(student.id)}>
          Delete Student
        </Button>
      </div>
      <img src={student.imageUrl} alt="student's image" width="150" height="150" />
      <p>Email: {student.email}</p>
      <p>GPA: {student.gpa===null||student.gpa===undefined ? ("No GPA provided") : (student.gpa)}</p>
      <div className="studentCampus">
        <h2>Campus</h2>
        {student.campus===null||student.campus===undefined ? ("This student does not belong to any campus") : (<Link to={`/campus/${student.campusId}`}>{student.campus.name}</Link>)}
      </div>
    </div>
  </div>
  );
};


export default StudentsView;