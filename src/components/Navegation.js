import { makeStyles } from '@material-ui/core';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import './../css/fonts.css';

const useStyles = makeStyles(()=>({
    navBar:{
        padding:'40px 0 0 0',
        display:'flex',
        flexDirection:'column',
        background:'#5A2120',
        position:'fixed',
        width:'85px',
        left:'0',
        top:'81px',
        height:'100%',
        transition: '.5s',
        "& button":{
            width:'100%',
            border: 'none',
            background: 'transparent',
            color: '#FFEFC9',
            outline:'none',
            transition:'.4s',
            padding:'20px',
            fontFamily: 'Merriweather Sans, sans-serif',
            textAlign: 'left',
            fontSize:'17px',
            display:'flex',
            flexDirection: 'row'
        },
        "& button:hover":{
            background:'#A84F4D'
        },
        "& button div":{
            margin:'10px 0 0',
            display:'none'
        },
        "&:hover":{
            width: '220px'
        },
        "&:hover button div":{
            display:'block'
        }
    },
    icon:{
        fontSize:'40px',
        margin:'0 10px 0 0'
    }

}));

const Navegation = () => {
  const classes = useStyles();
  return (
    
      <nav className={classes.navBar}>
          <button className={classes.buttonNav}> <FontAwesomeIcon icon={faHome} className={classes.icon}/> <div>Inicio</div></button>
          <button className={classes.buttonNav}> <FontAwesomeIcon icon={faSignOutAlt} className={classes.icon}/> <div>Cambiar código</div></button>
      </nav>
    
  );
}

export default Navegation;