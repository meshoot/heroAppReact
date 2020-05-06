import { connect } from 'react-redux'

import Header from '../views/Layout/components/Header'

import { fetchHeroes } from '../actions/heroes'

const mapStateToProps = store => ({
  title: store.page.title || ''
})

const mapDispatchToProps = dispatch => ({
  fetchHeroes: params => dispatch(fetchHeroes(params))
})

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer
