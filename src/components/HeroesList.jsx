import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useLocation, useHistory } from 'react-router-dom'
import qs from 'qs'

import { Grid } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import Hero from './UI/HeroCard/'
import Pagination from './UI/Pagination'

const HeroesList = props => {
  const { heroes: { loading, data = {} }, fetchHeroes } = props
  const { totalPages } = data
  const query = qs.parse(useLocation().search, { ignoreQueryPrefix: true })
  const currentPage = query.page || undefined
  const history = useHistory()

  useEffect(() => {
    fetchHeroes()
  }, [])

  const onChangePageHandler = (event, page) => {
    history.push({
      search: qs.stringify({ ...query, page })
    })

    fetchHeroes({ page })
  }

  if (loading) {
    return (
      <Grid container justify={'center'} alignItems={'center'}>
        <Grid item xs={1} md={1} lg={1}>
          <CircularProgress/>
        </Grid>
      </Grid>
    )
  }

  return (
    <section>
      { data.results && (
        <Grid container justify={'center'}>
          <Grid container spacing={3}>
            { data.results.map(hero => (
              <Grid xs={6} md={4} lg={3} item key={hero.id}>
                <Hero {...hero}/>
              </Grid>)
            )}
          </Grid>
          <Pagination
            count={ totalPages }
            color={'primary'}
            disabled={ loading }
            onChange={onChangePageHandler}
            defaultPage={ Number(currentPage) || undefined }
          />
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
