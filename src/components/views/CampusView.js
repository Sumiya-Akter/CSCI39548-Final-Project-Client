import { Link } from "react-router-dom";

const CampusView = (props) => {
  const {campus} = props;
  
  return (
    <div>      
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