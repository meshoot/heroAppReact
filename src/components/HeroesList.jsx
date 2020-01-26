import React, {useState} from 'react';

import HeroCard from "./HeroCard";

function HeroesList() {
    const [heroes, setHeroes] = useState([]);

    return(
        <section>
            <ul>
                <li>
                    <HeroCard/>
                </li>
            </ul>
        </section>
    )
}

export default HeroesList;