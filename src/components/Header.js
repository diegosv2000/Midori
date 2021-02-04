import { makeStyles } from '@material-ui/core';
import React from 'react';
import User from './User';
import logo from './../images/logo.png'

const useStyles = makeStyles((theme)=>({
    head:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position:'fixed',
        top:'0',
        width:'100%',
        height:'70px',
        padding:'5px 5px 5px 10px',
        background:'whitesmoke',
        borderBottom:'1px solid #B9B9B9',
        [theme.breakpoints.down('xs')]:{
          height:'50px',
        }
    },
    img:{
        height: '100%'
    }
}));


const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.head}>
      <img src={logo} className={classes.img} />
      <User />
    </header>
  );
}

export default Header;
