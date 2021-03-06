import React from 'react'

import Filter from '../../../components/Filter'
import Tabs from '../../../components/UI/Tabs'
import HeroesListContainer from '../../../containers/HeroesListContainer'
import FavoritesHeroesListContainer from '../../../containers/FavoritesHeroesListContainer'

const heroesListTabs = [
  {
    id: 'All',
    label: 'all',
    href: '',
    content: <HeroesListContainer/>
  },
  {
    id: 'Favorites',
    label: 'Favorites',
    href: '',
    content: <FavoritesHeroesListContainer/>
  }
]

const Main = () => {
  return (
    <main>
      <section>
        <Filter/>
        <Tabs tabs={heroesListTabs}/>
      </section>
    </main>
  )
}

export default Main
