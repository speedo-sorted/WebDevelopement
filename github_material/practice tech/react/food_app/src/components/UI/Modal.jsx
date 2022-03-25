import React from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

function Backdrop(props) {

    return (
        <div className={classes.backdrop} onClick={props.hideCart}></div>
    );
}

function Overlay(props) {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
}

export default function Modal(props) {

  return (
    <>
        {
            ReactDOM.createPortal(
            <>
            <Backdrop hideCart={props.hideCart}/>
            <Overlay>{props.children}</Overlay>
            </>,
            document.getElementById('modal-box'))
        }
    </>  
  );
}
