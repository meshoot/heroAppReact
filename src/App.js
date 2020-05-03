import React from 'react'

import Layout from './views/Layout'
import { APP_NAME } from './constants';

const App = props => {
  document.title = APP_NAME

  return (
    <Layout/>
  )
}

export default App
