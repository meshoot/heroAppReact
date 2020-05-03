import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { Grid } from '@material-ui/core'
import Hero from './UI/HeroCard/'

const HeroesList = props => {
  const { heroes: { data }, fetchHeroes } = props

  useEffect(() => {
    fetchHeroes()
  }, [])

  return (
    <section>
      { data.results && (
        <Grid container spacing={3}>
          { data.results.map(hero => (
            <Grid xs={3} item key={hero.id}>
              <Hero {...hero}/>
            </Grid>)
          )}
        </Grid>
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
