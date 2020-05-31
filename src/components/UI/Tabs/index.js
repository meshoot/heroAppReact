import React, { useState } from 'react'
import MaterialTabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Proptypes from 'prop-types'

const Tabs = ({ ...props }) => {
  return (
    <MaterialTabs {...props} >
    </MaterialTabs>
  )
}

export default Tabs
