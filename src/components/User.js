import { makeStyles } from '@material-ui/core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMale} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './../css/fonts.css';
const useStyles = makeStyles(()=>({
    user:{
        display:'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '20px',
        fontFamily: 'Roboto Condensed, sans-serif',
        margin:'0 20px'
    },
    gender:{
        margin:'0 10px'
    }
}));


const User = () => {
  const classes = useStyles();
  return (
    <div className={classes.user}>
        <div className='userName'>DIEGO EDGARDO SALAZAR VERGARA</div>
        <div className={classes.gender}><FontAwesomeIcon icon={faMale}/></div>
    </div>
  );
}

export default User;
