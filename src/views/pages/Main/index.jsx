import React from 'react'

import Page from '../../../components/Page'
import Filter from '../../../components/Filter'
import HeroesListContainer from '../../../containers/HeroesListContainer'

const Main = props => {
  return (
    <main>
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
