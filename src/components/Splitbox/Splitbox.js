import React from 'react';
import './Splitbox.css';

function Splitbox(props) {
    let splits = props.splits.map(split => {
        return <p>{split}</p>;
    })
    return (
        <div className="splitBox">
            <h2>SPLITS:</h2>
            {splits}
        </div>
    )
}

export default Splitbox;