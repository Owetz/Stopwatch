import React from 'react';
import './Controller.css';

function Controller(props) {
    return (
        <button className={props.class} onClick={props.onClick}>{props.name.toUpperCase()}</button>
    )
}

export default Controller;