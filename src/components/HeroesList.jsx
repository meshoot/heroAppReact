import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import Index from './UI/HeroCard/'

const HeroesList = props => {
  const { data, fetchHeroes } = props

  useEffect(() => {
    fetchHeroes()
  }, [])

  return (
    <section>
      { data && (
        <ul>
          { data.map(hero => (
            <li key={hero.id}>
              <Index/>
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
