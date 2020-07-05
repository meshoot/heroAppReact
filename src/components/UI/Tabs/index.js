import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import MaterialTabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import { makeStyles } from '@material-ui/core/styles'

const TabPanel = props => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}

const LinkTab = props => {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault()
      }}
      {...props}
    />
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}))

const NavTabs = props => {
  const { tabs } = props
  const classes = useStyles()
  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <MaterialTabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          { tabs && tabs.map((tab, index) =>
            <LinkTab
              key={tab.id}
              aria-controls={`nav-tabpanel-${index}`}
              label={tab.id}
              href="/drafts"
            />) }
        </MaterialTabs>
      </AppBar>
      { tabs && tabs.map((tab, index) =>
        <TabPanel key={tab.id} value={value} index={index}>
          { tab.content }
        </TabPanel>
      ) }
    </div>
  )
}

NavTabs.propTypes = {
  tabs: PropTypes.array.isRequired
}

export default NavTabs
