import React from "react";

const Card = ({id, name, email}) => {
    return (
        <div className= "tc grow bw2 shadow-5 bg-light-green mh2 mv1">
            <img src={`https://robohash.org/Test${id}}?200x200`} alt="alt"></img>
            <div>
    <h2>Name: {name}</h2>
    <p>Email: {email}</p>
            </div>
        </div>
    );
    
}

export default Card;