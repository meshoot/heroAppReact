import React, {useState} from 'react';
import Button from './Button';

const demo = {
    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
    "homeworld": "https://swapi.co/api/planets/1/",
};

function HeroCard(props) {
    return(
        <div className="hero-card">
            <div className="hero-card__img">
                <img src={demo.img} alt={`Фото ${demo.name}`}/>
            </div>
            <h3 className="hero-card__name">{demo.name}</h3>
            <p className="hero-card__info">

            </p>
            <div className="hero-card__control">
                <Button>Like</Button>
            </div>
        </div>
    )
}

export default HeroCard;