import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Tab, AppBar, Tabs as MaterialTabs } from '@material-ui/core'
import { TabList, TabPanel, TabContext } from '@material-ui/lab'

const Tabs = ({ initialValue, tabs, ...props }) => {
  const [value, setValue] = useState(initialValue || tabs[0].value)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <MaterialTabs>
      <TabContext value={value}>
        <AppBar position="static">
          <TabList onChange={handleChange} {...props}>
            { tabs && tabs.map(tabItem => <Tab label={tabItem.label} value={tabItem.value} key={tabItem.value}/>) }
          </TabList>
        </AppBar>
        { tabs && tabs.map(tabItem => <TabPanel value={tabItem.value} key={tabItem.value}/>) }
      </TabContext>
    </MaterialTabs>
  )
}

Tabs.propTypes = {
  initialValue: PropTypes.string,
  tabs: PropTypes.array
}

export default Tabs
