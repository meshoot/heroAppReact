import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import Hero from './UI/HeroCard/'

const HeroesList = props => {
  const { heroes: { data }, fetchHeroes } = props

  useEffect(() => {
    fetchHeroes()
  }, [])

  return (
    <section>
      { data.results && (
        <ul>
          { data.results.map(hero => (
            <li key={hero.id}>
              <Hero {...hero}/>
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
