import { makeStyles } from '@material-ui/core';
import React from 'react';
import './../css/fonts.css';

const useStyles = makeStyles(()=>({
    listName:{
        width:'85px',
        height:'85px',
        border:'3px solid #5A2120',
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
        fontSize:'70px',
        fontWeight:'bold'
    }
}));

const ListName = () => {
  const classes = useStyles();
  return (
      <div className={classes.listName}>
          1
      </div>
    
  );
}

export default ListName;
