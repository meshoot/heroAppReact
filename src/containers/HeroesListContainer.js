import { connect } from 'react-redux'

import { fetchHeroes } from '../actions/heroes'
import HeroesList from '../components/HeroesList'

const mapStateToProps = state => {
  return {
    heroes: state.heroes
  }
}

const mapDispathToProps = dispatch => {
  return {
    fetchHeroes: () => dispatch(fetchHeroes())
  }
}

export default connect(mapStateToProps, mapDispathToProps)(HeroesList)
