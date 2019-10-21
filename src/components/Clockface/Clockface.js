import React from 'react';
import './Clockface.css';

function Clockface({time}) {

    return (
    <div className="clockFace">
        {time}
    </div>
    )
}

export default Clockface;