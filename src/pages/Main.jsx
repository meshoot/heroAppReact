import React from 'react';

import HeroesList from "../components/HeroesList";
import Filter from "../components/Filter";
import Search from "../components/Search";

export function Main() {
    return (
        <main>
            <h1>Главная</h1>
            <aside>
                <Filter/>
            </aside>
            <section>
                <Search/>
                <HeroesList/>
            </section>
        </main>
    )
}