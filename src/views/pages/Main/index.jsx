import React from 'react'

import Page from '../../../components/Page'
import Filter from '../../../components/Filter'
import HeroesListContainer from '../../../containers/HeroesListContainer'

const Main = props => {
  return (
    <Page title={'Главная'}>
      <main>
        <aside>
          <Filter/>
        </aside>
        <section>
          <HeroesListContainer/>
        </section>
      </main>
    </Page>
  )
}

export default Main
