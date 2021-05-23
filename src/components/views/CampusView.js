

const CampusView = (props) => {
  const {campus} = props;
  //waiting for students array to be populated
  // if (campus.students === undefined){
  //   return <div>Loading...</div>
  // }
  return (
    <div>      
      <h1>{campus.name}</h1>
      <img src={campus.imageUrl} width="150" height="150" />
      <p>{campus.address}</p>
      <p>{campus.description}</p>

      <h2>Students on campus</h2>
      <ul>
      {campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <li key={student.id}>
            <img src={student.imageUrl} width="150" height="150" />
            <p>{name}</p>
            </li>
        );
      })}
      </ul>
    </div>
  );

};

export default CampusView;