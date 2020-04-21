import React, {useState} from 'react';

import HeroCard from "./UI/HeroCard";

const HeroesList = props => {
    const { heroes } = props;

    return(
        <section>
            { heroes && (
                <ul>
                    { heroes.map(hero => (
                        <li key={hero.id}>
                            <HeroCard/>
                        </li>)
                    )}
                </ul>
            ) }
        </section>
    )
};

export default HeroesList;