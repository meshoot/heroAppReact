import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Header from './components/Header'
import MainPage from './../pages/Main/'
import FavoritesPage from './../pages/Favorites'
import Page from '../../components/Page'

const Layout = props => {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/favorites" component={() => <Page render={FavoritesPage} title="Избранное"/>}/>
        <Route exact path="/" component={() => <Page render={MainPage} title="Главная"/>}/>
      </Switch>
    </Router>
  )
}

export default Layout
