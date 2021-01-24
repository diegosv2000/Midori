import { makeStyles } from '@material-ui/core';
import React from 'react';
import './../css/fonts.css';
import perfil from './../images/perfil.jpg'
import SeeMore from './SeeMore';

const useStyles = makeStyles(()=>({
    returnB:{
        padding:'10px 25px',
        border: '1px solid #D1C19A',
        borderRadius:'5px',
        background:'#D1C19A',
        fontWeight:'bold',
        fontSize:'15px',
        color: 'white',
        "&:hover":{
            cursor: 'pointer'
        }
    }
}));

const Return = () => {
  const classes = useStyles();
  return (

        <button className={classes.returnB}>
            Regresar
        </button>

    
  );
}

export default Return;
