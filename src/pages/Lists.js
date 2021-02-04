import { makeStyles } from '@material-ui/core';
import React from 'react';
import List from 'components/List';
import 'css/fonts.css';
import Navegation from 'components/Navegation';
import Header from 'components/Header';

const useStyles = makeStyles((theme)=>({
    lists:{
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
    listsContainer:{
        margin:'25px auto',
        width: '90%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        flexWrap:'wrap',
    }


}));

const Lists = () => {
  const classes = useStyles();
  return (
      <React.Fragment>
        <Header />
        <Navegation />
        <div className={classes.lists}>
            <div className={classes.titleElection}>ELECCIONES RECTORALES 2021</div>
            <div className={classes.listsContainer}>
                <List />
                <List />
                <List />
                <List />
                <List />
                <List />
                <List />
                <List />
            </div>
            
        </div>
      </React.Fragment>
    
  );
}

export default Lists;
