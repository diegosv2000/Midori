import { makeStyles } from '@material-ui/core';
import React from 'react';
import Navegation from './Navegation';


const useStyles = makeStyles(()=>({


}));

const Welcome = () => {
  const classes = useStyles();
  return (
    
      <div className={classes.Search}>
          <Navegation />

      </div>
    
  );
}

export default Welcome;
