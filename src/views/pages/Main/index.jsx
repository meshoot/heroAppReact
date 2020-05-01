import React from 'react'

import Filter from '../../../components/Filter'
import HeroesListContainer from '../../../containers/HeroesListContainer'

const Main = props => {
  return (
    <main>
      <h1>Главная</h1>
      <aside>
        <Filter/>
      </aside>
      <section>
        <HeroesListContainer/>
      </section>
    </main>
  )
}

export default Main
