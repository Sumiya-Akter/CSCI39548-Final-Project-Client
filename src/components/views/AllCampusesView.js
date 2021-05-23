import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return <div>There are no campuses.</div>;
  }

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
      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h1>{campus.name}</h1>
            <img src={campus.imageUrl} alt="campuses' image" width="150" height="150" />
          </Link>
        </div>
      ))}
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;