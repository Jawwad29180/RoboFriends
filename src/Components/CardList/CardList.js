import React from 'react';
import Card from '../Card/Card';
import "./CardList.css";

const CardList = ({robots}) => {
 
    return (
        <div className="tc flex flex-wrap cardlist">
            {
                robots.map((robot, i) => {
                    return <Card key= {robot.id} id={robot.id} name={robot.name} email={robot.email}/>
                    })
            }
        </div>
          
    );
    

}

export default CardList;
