import { makeStyles } from '@material-ui/core';
import React from 'react';
import './../css/fonts.css';

const useStyles = makeStyles(()=>({
    returnB:{
        padding:'8px 25px 11px',
        border: '1px solid #D1C19A',
        borderRadius:'5px',
        background:'#D1C19A',
        textDecoration:'none',
        fontWeight:'bold',
        fontSize:'15px',
        color: 'white',
        "&:hover":{
            cursor: 'pointer'
        },

    }
}));

const Return = () => {
  const classes = useStyles();
  return (

        <a className={classes.returnB} href="./Listas">
            Regresar
        </a>

    
  );
}

export default Return;
