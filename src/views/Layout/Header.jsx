import React from 'react'
import { NavLink } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Typography'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Box from '@material-ui/core/Box'

const Header = props => {
  return (
    <header>
      <AppBar position={'static'}>
        <Link component={NavLink} to="/">
          <Typography>Главная</Typography>
        </Link>
        <Link component={NavLink} to="/favorites">
          <Typography>Любимые</Typography>
        </Link>
      </AppBar>
    </header>
  )
}

export default Header
