import React from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import { makeStyles } from '@material-ui/core';
import './App.css';

const useStyles = makeStyles(()=>({
  containerHome:{
    margin:'50px',
    display:'flex',
    justifyContent:'center'
  }
}))

const App = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <Header />
      <div className={classes.containerHome}>
        <Home />
      </div>
    </div>
  );
}

export default App;
