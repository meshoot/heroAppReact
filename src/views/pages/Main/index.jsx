import React from 'react'

import Tabs from '../../../components/UI/Tabs'
import Filter from '../../../components/Filter'
import HeroesListContainer from '../../../containers/HeroesListContainer'

const Main = () => {
  const HeroListTabsList = [
    { value: 'tab-all', label: 'Все' },
    { value: 'tab-favorites', label: 'Любимые' }
  ]

  return (
    <main>
      <section>
        <Tabs tabs={HeroListTabsList} />
        <aside>
          <Filter/>
        </aside>
        <HeroesListContainer type="all"/>
      </section>
    </main>
  )
}

export default Main
