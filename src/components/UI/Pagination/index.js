import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import MaterialPagination from '@material-ui/lab/Pagination/'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2)
    }
  }
}))

const Pagination = props => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <MaterialPagination {...props} />
    </div>
  )
}

export default Pagination
