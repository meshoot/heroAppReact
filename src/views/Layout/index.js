import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import HeaderContainer from '../../containers/HeaderContainer'
import MainPage from './../pages/Main/'
import FavoritesPage from './../pages/Favorites'
import PageContainer from '../../containers/PageContainer'

const Layout = props => {
  return (
    <Router>
      <HeaderContainer/>
      <Switch>
        <Route path="/favorites" component={() => <PageContainer render={FavoritesPage} title="Избранное"/>}/>
        <Route exact path="/" component={() => <PageContainer render={MainPage} title="Главная"/>}/>
      </Switch>
    </Router>
  )
}

export default Layout
