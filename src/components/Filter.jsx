import React from 'react'

import { Select, InputLabel, MenuItem  } from '@material-ui/core/'

const Filter = props => {
  return (
    <div>
      <div>
        <InputLabel>Пол</InputLabel>
        <Select displayEmpty>
          <MenuItem>Н/А</MenuItem>
          <MenuItem>Мужской</MenuItem>
          <MenuItem>Женский</MenuItem>
          <MenuItem>Любой</MenuItem>
        </Select>
      </div>
    </div>
  )
}

export default Filter
