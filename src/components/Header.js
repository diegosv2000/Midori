import { makeStyles } from '@material-ui/core';
import React from 'react';
import logo from './../images/logo.png'

const useStyles = makeStyles(()=>({
    head:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    img:{
        height: '70px'
    },
    user:{
        display:'flex',
        flexDirection: 'row',
        fontSize: '20px',
        fontFamily: 'sans-serif'
    }
}));


const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.head}>
      <img src={logo} className={classes.img} />
      <div className={classes.user}>
          <div className='userName'>Diego Edgardo Salazar Vergara</div>
          <div className='gender'>H</div>
      </div>
    </div>
  );
}

export default Header;
