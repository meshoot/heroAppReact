import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { removeHeroFromFavorite } from '../actions/heroes'
import HeroesList from '../components/HeroesList'

const mapStateToProps = ({ heroes: { loading, favorites }, ...props }) => {
  return {
    heroes: {
      loading,
      data: favorites
    },
    ...props
  }
}

const mapDispathToProps = dispatch => ({
  removeHeroFromFavorite: hero => dispatch(removeHeroFromFavorite(hero))
})

export default withRouter(connect(mapStateToProps, mapDispathToProps)(HeroesList))
