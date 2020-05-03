import React from 'react';
import "./Scroll.css"
const Scroll = (props) => {
    return(
        <div className="b--solid br2 b--light-silver scrollDiv">
            {props.children}
        </div>
    )
}

export default Scroll;