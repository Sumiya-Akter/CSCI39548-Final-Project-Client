import PropTypes from "prop-types";
import {Link} from "react-router-dom";

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

const AllStudentsView = (props) => {
    return(
        <div>
<<<<<<< Updated upstream
            {props.allStudents.map((student) => (
                <div key={student.id}>
                    <Link to={`/students/${student.id}`}>
                        <h1>{student.firstname} {student.lastname}</h1>
                    </Link>
                    <p>{student.email}</p>
                    <p>{student.gpa}</p>
                </div>
            ))}
=======
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
            <div>
                {props.allStudents.map((student) => (
                    <div key={student.id}>
                        <button onClick={() => onDelete(student.id)}>Delete Student</button>
                        <Link to={`/student/${student.id}`}>
                            <h1>{student.firstname} {student.lastname}</h1>
                        </Link>
                    </div>
                ))}
            </div>
>>>>>>> Stashed changes
        </div>
    );
};

AllStudentsView.propTypes={
    allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;