import React, { useState } from 'react'

import Tabs from '../../../components/UI/Tabs'
import Filter from '../../../components/Filter'
import HeroesListContainer from '../../../containers/HeroesListContainer'

const Main = props => {
  const [activeTab, setActiveTab] = useState('')

  return (
    <main>
      <aside>
        <Filter/>
      </aside>
      <section>
        <Tabs value={activeTab} />
        <HeroesListContainer type="all"/>
      </section>
    </main>
  )
}

export default Main
