import React from 'react';
import './style.css';
import data from './data.json';

const Card = () => {
    return(
        <div className="card" data={data}>
            <div>
                <h3>{data.title} ({data.year})</h3>
                <p>{data.storyline}</p>
                <h4>IMDB Rating: {data.imdbRating}</h4>
                { data.actors.map((actor, i) => <span className="actor" key={`actor${i}`}>{actor}</span> )}
            </div>
            <img src={data.posterurl} />
        </div>
    )
};

export default Card;