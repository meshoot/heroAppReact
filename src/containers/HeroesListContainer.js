import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { fetchHeroes, addHeroToFavorite, removeHeroFromFavorite } from '../actions/heroes'
import HeroesList from '../components/HeroesList'

const mapStateToProps = ({ heroes, ...props }) => {
  return {
    heroes,
    props
  }
}

const mapDispathToProps = dispatch => {
  return {
    fetchHeroes: params => dispatch(fetchHeroes(params)),
    addHeroToFavorite: hero => dispatch(addHeroToFavorite(hero)),
    removeHeroFromFavorite: hero => dispatch(removeHeroFromFavorite(hero))
  }
}

export default withRouter(connect(mapStateToProps, mapDispathToProps)(HeroesList))
