import React from 'react';
import './Splitbox.css';

function Splitbox(props) {
    let splits = props.splits.map((split, index) => {
        let lap = props.splits.length - index;
        lap = lap < 10 ? '0'+lap : lap; 
        return <p>{lap}:    {split}</p>;
    })
    return (
        <div className="splitBox">
            {splits}
        </div>
    )
}

export default Splitbox;