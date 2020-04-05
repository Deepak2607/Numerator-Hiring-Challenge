import React from 'react';

const Game =(props)=> {

    return (   
        <tr style={{cursor:'pointer'}} onClick={props.onClick}>
            <td>{props.rank}</td>
            <td>{props.name}</td>
            <td>{props.platform}</td>
            <td>{props.year}</td>
            <td>{props.genre}</td>
            <td>{props.publisher}</td>
            <td>{props.global_sales}</td>
        </tr>
       )  
}

export default Game;


