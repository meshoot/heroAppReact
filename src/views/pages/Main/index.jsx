import React, { useState } from 'react'

import Tabs from '../../../components/UI/Tabs'
import Filter from '../../../components/Filter'
import HeroesListContainer from '../../../containers/HeroesListContainer'

const Main = props => {
  const [activeTab, setActiveTab] = useState('')
  const HeroListTabsList = [
    { id: 'tab-all', 'aria-controls': 'tab-panel-all', label: 'Все' },
    { id: 'tab-favorites', 'aria-controls': 'tab-panel-favorites', label: 'Любимые' }
  ]

  return (
    <main>
      <aside>
        <Filter/>
      </aside>
      <section>
        <Tabs value={activeTab} tabs={HeroListTabsList} />
        <HeroesListContainer type="all"/>
      </section>
    </main>
  )
}

export default Main
