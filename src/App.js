import React from 'react'

import Layout from './views/Layout'
import { APP_NAME } from './constants'
import HeaderContainer from './containers/HeaderContainer'

const App = props => {
  document.title = APP_NAME

  return (
    <div>
      <HeaderContainer/>
      <Layout />
    </div>
  )
}

export default App
