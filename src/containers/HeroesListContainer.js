import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { fetchHeroes } from '../actions/heroes'
import HeroesList from '../components/HeroesList'

const mapStateToProps = ({ heroes, ...props }) => {
  return {
    heroes,
    props
  }
}

const mapDispathToProps = dispatch => {
  return {
    fetchHeroes: params => dispatch(fetchHeroes(params))
  }
}

export default withRouter(connect(mapStateToProps, mapDispathToProps)(HeroesList))
