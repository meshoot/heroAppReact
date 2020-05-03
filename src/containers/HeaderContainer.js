import { connect } from 'react-redux'

import Header from '../views/Layout/components/Header'

const mapStateToProps = store => ({
  title: store.page.title || ''
})

const mapDispatchToProps = dispatch => ({

})

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer
