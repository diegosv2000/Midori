import { makeStyles } from '@material-ui/core';
import React from 'react';
import 'css/fonts.css';
import Navegation from 'components/Navegation';
import Return from 'components/Return';
import Card from 'components/Card';
import Header from 'components/Header';

const useStyles = makeStyles((theme)=>({
    members:{
        
        margin:'81px 20px 0 85px',
        width:'100%',
        display:'flex',
        flexDirection:'column',
        [theme.breakpoints.down('xs')]:{
          margin:'61px 20px 0'
        }
        
    },
    titleElection:{
        margin:'20px 0 0',
        textAlign:'center',
        fontSize:'40px',
        fontFamily: 'Rubik, sans-serif',
        fontWeight:'bold',
        [theme.breakpoints.down('xs')]:{
          fontSize:'30px'
        }
    },
    subTitleElection:{
        width:'75%',
        margin:'20px auto 0',
        padding:'0 0 0 5px',
        borderLeft:'3px solid #5A2120',
        display:'flex',
        fontSize:'20px',
        fontWeight:'bold',
        "& div":{
            width:'25px',
            height:'25px',
            border:'1px solid #5A2120',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            margin:'0 5px'
        },
        [theme.breakpoints.down('xs')]:{
          fontSize:'15px',
          width:'85%'
        }
    },
    membersContainer:{
        margin:'20px auto ',
        display:'flex',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        width:'85%'
    },
    cardContainer:{
        margin:'0 25px 35px'
    },
    returnCont:{
        margin:'20px auto'
    }

}));

const Members = () => {
  const classes = useStyles();
  return (
      <React.Fragment>
        <Header />
        <Navegation />
        <div className={classes.members}>
            <div className={classes.titleElection}>ELECCIONES RECTORALES 2021</div>
            <div className={classes.subTitleElection}>Integrantes de la lista <div>1</div> </div>
            <div className={classes.membersContainer}>
                <div className={classes.cardContainer}>
                    <Card />
                </div>
                <div className={classes.cardContainer}>
                    <Card />
                </div>
                <div className={classes.cardContainer}>
                    <Card />
                </div>
                <div className={classes.cardContainer}>
                    <Card />
                </div>
                <div className={classes.cardContainer}>
                    <Card />
                </div>
                <div className={classes.cardContainer}>
                    <Card />
                </div>
                
            </div>
            <div className={classes.returnCont}><Return /></div>
        </div>
      </React.Fragment>
    
  );
}

export default Members;
