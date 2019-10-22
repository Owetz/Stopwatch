import React from 'react';
import './Clockface.css';

function Clockface({time}) {

    return (
    <div className="clockFace">
        <p>{time}</p>
    </div>
    )
}

export default Clockface;