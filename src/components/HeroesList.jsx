import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import HeroCard from './UI/HeroCard'

const HeroesList = props => {
  const { heroes: { data }, fetchHeroes } = props

  useEffect(() => {
    fetchHeroes()
  }, [])

  return (
    <section>
      { data && (
        <ul>
          { data.map(hero => (
            <li key={hero.id}>
              <HeroCard/>
            </li>)
          )}
        </ul>
      ) }
    </section>
  )
}

HeroesList.propTypes = {
  heroes: PropTypes.object,
  data: PropTypes.array,
  fetchHeroes: PropTypes.func
}

export default HeroesList
