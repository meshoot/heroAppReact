import React from 'react'
import MaterialTabs from '@material-ui/core/Tabs'

import Tab from '@material-ui/core/Tab'
import AppBar from '@material-ui/core/AppBar'

const TabPanel = props => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div>

        </div>
      )}
    </div>
  )
}

const Tabs = ({ tabs }) => {
  return (
    <MaterialTabs>
      <AppBar>
        { tabs && tabs.map(tabItem => <Tab label={tabItem.label}/>) }
      </AppBar>
      { tabs && tabs.map(tabItem => <TabPanel/>) }
    </MaterialTabs>
  )
}

export default Tabs
