import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "60px",
    color: "white"
  },
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    height:'65px',
    diplay: 'flex'
  },
  link: {
    textDecoration: "none",
    textShaddow: "3px 3px grey",
    color: "grey",
    fontSize: "20px",
    marginLeft: theme.spacing(10),
    "&:hover": {
      color: "black",
      border: "1px dotted white",
    },
    bar: {
      color:"white"
    }
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar className={classes.bar} >
        <Link variant="h1" className={classes.title} to= "/">
          Dalton Rothrock
        </Link>
        <div>
        <div className = {classes.navlinks}>
            <Link className={classes.link} to="/">
            Home
            </Link>
            <Link className={classes.link} to="/contact">
            Contact
            </Link>
            <Link className={ classes.link} to="/resume" >
            Resume
            </Link>
            <Link className={ classes.link} to='/portfolio' >
            Portfolio
            </Link>
            <Link className={ classes.link} to='/about' >
            About
            </Link>
            </div>
        </div>
         
      </Toolbar>
    </AppBar> 
  );
}
export default Header;


