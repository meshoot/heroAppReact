import React from 'react';

import Filter from "../../../components/Filter";

const Main = props => {
    const { heroes } = props;

    return (
        <main>
            <h1>Главная</h1>
            <aside>
                <Filter/>
            </aside>
            <section>

            </section>
        </main>
    )
};

export default Main

