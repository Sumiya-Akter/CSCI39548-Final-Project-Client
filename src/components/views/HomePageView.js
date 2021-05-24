import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    fontType: 'bold',
    fontFamily: 'Courier, sans-serif', 
    fontSize: '35px', 
    color: '#CDDC39'
  },
  appBar:{
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  greeting:{
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: "50%",
    margin: "auto",
  },
  links:{
    textDecoration: 'none',
  }

}));

const HomePageView = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit" >
            CRUD App
          </Typography>

          <Link className={classes.links} to={'/campuses'} >
            <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
              All Campuses
            </Button>
          </Link>

          <Link className={classes.links} to={'/students'} >
            <Button variant="contained" color="primary">
              All Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      
      <div className="homeTitle" style={{marginLeft: '20px'}}>
        <h1 style={{fontFamily: 'Courier, sans-serif'}}>Welcome to the Campus and Student Directory App</h1>
        <p>Please select either <b>All Campuses</b> or <b>All Students</b> in the top-right navigation bar to get started</p>
      </div>
      <div className="homeFooter" style={{ marginLeft: '20px', position: 'absolute', bottom: '0', fontSize: '12px'}}>
        <p>Project by <a href="https://github.com/Jhe0031" style={{textDecoration: 'none'}}>Jia Qi He</a>, <a href="https://github.com/Sumiya-Akter" style={{textDecoration: 'none'}}>Sumiya Akter</a>, and <a href="https://github.com/lilyworld" style={{textDecoration: 'none'}}>Li Gao</a> for the 2021 Spring Web Development course at Hunter College</p>
      </div>
    </div>
  );    
}




export default HomePageView;
