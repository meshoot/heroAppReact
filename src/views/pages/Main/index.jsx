import React from 'react'

import Filter from '../../../components/Filter'
import HeroesListContainer from '../../../containers/HeroesListContainer'

const Main = props => {
  return (
    <main>
      <aside>
        <Filter/>
      </aside>
      <section>
        <HeroesListContainer type="all"/>
      </section>
    </main>
  )
}

export default Main
