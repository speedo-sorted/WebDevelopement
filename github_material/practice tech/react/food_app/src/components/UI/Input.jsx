import React from 'react';
import classes from './Input.module.css';

export default function Input(props) {
  return (
    <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        {/* We can add attributes like below */}
        <input {...props.input} className={props.className} />
    </div>
  )
}
