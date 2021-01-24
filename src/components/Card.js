import { makeStyles } from '@material-ui/core';
import React from 'react';
import './../css/fonts.css';
import perfil from './../images/perfil.jpg'
import SeeMore from './SeeMore';

const useStyles = makeStyles(()=>({
    card:{
        width:'330px',
        height:'160px',
        border:'1px solid #D1C19A',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        borderRadius:'10px',
        outline:'none',
        transition:'.2s',
        "&:hover":{
            border:'1px solid #5A2120',
            cursor:'pointer'
        }
    },
    cardContent:{
        margin:'15px 10px 0 20px',
        display:'flex',
        flexDirection:'row',
        "& *":{
            color:'#401817'
        }
    },
    imgCont:{
        width:'90px',
        "& img":{
            width:'100%'
            
        }
    },
    infoCard:{
        display:'flex',
        flexDirection:'column',
        margin:'0px 0 0 20px'
    },
    nameCard:{
        fontWeight:'bold',
        margin:'0',
        textAlign:'left'
    },
    lnameCard:{
        fontWeight:'bold',
        margin:'0',
        textAlign:'left'
    },
    professionCard:{
        fontSize:'12px',
        margin:'5px 0 0',
        textAlign:'left'
    },
    positionCard:{
        fontSize:'12px',
        margin:'5px 0 0',
        textAlign:'left'
    },
    smContent:{
        margin: '0px auto'
    }
}));

const Card = () => {
  const classes = useStyles();
  return (

        <button className={classes.card}>
            <div className={classes.cardContent}>
                <div className={classes.imgCont}><img src={perfil}/></div>
                <div className={classes.infoCard}>
                    <div className={classes.nameCard}>Andrés Miguel</div>
                    <div className={classes.lnameCard}>Saavedra Sanchez</div>
                    <div className={classes.professionCard}><strong>Carrera: </strong>Ing. Físico</div>
                    <div className={classes.positionCard}><strong>Cargo: </strong> Presidente</div>
                </div>
            </div>
            <div className={classes.smContent}><SeeMore /></div>
        </button>

    
  );
}

export default Card;
