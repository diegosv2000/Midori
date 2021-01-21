import { makeStyles } from '@material-ui/core';
import React from 'react';
import User from './User';
import logo from './../images/logo.png'

const useStyles = makeStyles(()=>({
    head:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position:'fixed',
        top:'0',
        width:'100%',
        padding:'5px',
        background:'whitesmoke',
        borderBottom:'1px solid #B9B9B9'
    },
    img:{
        height: '70px'
    }
}));


const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.head}>
      <img src={logo} className={classes.img} />
      <User />
    </div>
  );
}

export default Header;
