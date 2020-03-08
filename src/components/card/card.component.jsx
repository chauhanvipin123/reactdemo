import React from 'react';
import './card.styles.css';

export const Card = props => (
    <div className="card-container">
        <img alt="monsters"
        src={`https://robohash.org/${props.moonster.id}?set=set2`}/>
        <h2>{props.moonster.name}</h2>
        <p>{props.moonster.email}</p>
    </div>
);