import { Link } from "react-router-dom";

const StudentsView = (props) => {
    const {student} = props;
  
  return (
    <div>      
      <h1>{student.firstname} {student.lastname}</h1>
      <img src={student.imageUrl} alt="student's image" width="150" height="150" />
      <p>Email: {student.email}</p>
      <p>GPA: {student.gpa}</p>  
      <Link to={`/campus/${student.campusId}`}>
            <p>Campus ID {student.campusId}</p>
      </Link>
    </div>
    );
};


export default StudentsView;
