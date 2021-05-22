import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const AllStudentsView = (props) => {
    return(
        <div>
            {props.allStudents.map((student) => (
                <div key={student.id}>
                    <Link to={`/students/${student.id}`}>
                        <h1>{student.firstname} {student.lastname}</h1>
                    </Link>
                    <p>{student.email}</p>
                    <p>{student.gpa}</p>
                </div>
            ))}
        </div>
    );
};

AllStudentsView.propTypes={
    allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;