import React from 'react'
import { Switch, Route } from 'react-router-dom'

import MainPage from './../pages/Main/'
import PageContainer from '../../containers/PageContainer'

const Layout = props => {
  return (
    <Switch>
      <Route exact path="/" component={() => <PageContainer render={MainPage} title="Главная"/>}/>
    </Switch>
  )
}

export default Layout
