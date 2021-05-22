const StudentView = (props) => {
    const {student} = props;

    return(
        <div>
            <h1>{student.firstname}</h1>
            <h1>{student.lastname}</h1>
            <p>{student.email}</p>
            <p>{student.gpa}</p>
        </div>
    );
};

export default StudentView;