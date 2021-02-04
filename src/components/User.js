import { makeStyles } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMale, faBars } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './../css/fonts.css';

const useStyles = makeStyles((theme) => ({
    user:{
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '20px',
        fontFamily: 'Roboto Condensed, sans-serif',
        margin:'0 20px',
        [theme.breakpoints.down('xs')]:{
         display:'none'
        }
    },
    gender:{
        margin:'0 10px'
    },
    menu:{
      margin:'0 15px',
      fontSize:'35px',
      background:'none',
      border:'none',
      color:'#5A2120',
      outline:'none',
      display:'none',
      [theme.breakpoints.down('xs')]:{
       display:'block'
      }
    }
}));

const User = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.user}>
        <div className='userName'>DIEGO EDGARDO SALAZAR VERGARA</div>
        <div className={classes.gender}><FontAwesomeIcon icon={faMale}/></div>
      </div>
      <button className={classes.menu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
    </React.Fragment>
  );
}

export default User;
