import React from 'react';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(() => ({
    inputContainer:{
        position: 'relative',
        width: '100%',
        "& input": {
            display: 'block',
            background: 'none',
            width: '100%',
            border: 'none',
            fontSize: '15px',
            borderBottom: '2px solid #B11515',
            padding: '10px 0px 5px',
            transition: '.3s',
            color: '#331212',
            textAlign: 'center'
        },
        "& label":{
            position: 'absolute',
            fontSize: '15px',
            transition: '0.5s ease all',
            pointerEvents: 'none',
            color: '#5C5C5C',
            left:'45px',
            top: '7px'
        },
        "& input:focus":{
            outline: 'none',
            color: '#331212',
            borderBottom: '2px solid #5A2120'
        },
        "& input:focus~label":{
            top: '-20px',
            color: '#331212',
            textShadow: '0px 0px 5px white'
        },
        "& input:valid":{
            outline: 'none',
            color: '#5A2120',
            borderBottom: '2px solid #5A2120'
        },
        "& input:valid~label":{
            top: '-20px',
            color: '#5A2120'
        },
    }

    
}))
function InputForm(props){
    const classes = useStyles()
    return (
        <div className={classes.inputContainer}>
            <input type={props.type}  required/>
            <label>{props.label}</label>
        </div>
    );

}

export default InputForm;