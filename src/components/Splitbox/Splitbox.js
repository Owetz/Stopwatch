import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Splitbox.css';

function Splitbox(props) {
    let splits = props.splits.map((split, index) => {
        let lap = props.splits.length - index;
        lap = lap < 10 ? '0'+lap : lap; 
        return <p key={split}>{lap}:   {split}</p>;
    })
    if (splits.length === 0) {

    }
    return (
        <div className="splitBox">
            <ReactCSSTransitionGroup
                transitionName="fadeinright"
                transitionEnterTimeout={300}
                transitionLeave={false}
                >
                {splits}
            </ReactCSSTransitionGroup>
        </div>
    )
}

export default Splitbox;