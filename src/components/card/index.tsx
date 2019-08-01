import * as React from 'react';
import { v4 } from 'uuid';
import './style.scss';

const Card = props => {
    const { data }= props;
    
    return(
        <div className="card" key={ v4() }>
            <div>
                <h3>{data.title} ({data.year})</h3>
                <p>{data.storyline}</p>
                <h4>IMDB Rating: {data.imdbRating}</h4>
                { data.actors && data.actors.map((actor, i) => <span className="actor" key={`actor${i}`}>{actor}</span> )}
            </div>
            <img src={data.posterurl} />
        </div>
    )
};

export default Card;