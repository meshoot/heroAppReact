import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { Grid } from '@material-ui/core'
import Hero from './UI/HeroCard/'
import Pagination from './UI/Pagination'

const HeroesList = props => {
  const { loading, heroes: { data = {} }, fetchHeroes } = props
  const { previous, count, next } = data

  useEffect(() => {
    fetchHeroes()
  }, [])

  return (
    <section>
      { data.results && (
        <Grid container justify={'center'}>
          <Grid container spacing={3}>
            { data.results.map(hero => (
              <Grid xs={2} md={2} lg={3} item key={hero.id}>
                <Hero {...hero}/>
              </Grid>)
            )}
          </Grid>
          <Pagination count={ count } color={'primary'} disbled={loading}/>
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
