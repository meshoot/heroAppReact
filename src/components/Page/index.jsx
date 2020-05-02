import React from 'react'
import PropTypes from 'prop-types'

import Typography from '@material-ui/core/Typography'
import { Container } from '@material-ui/core'

const Page = ({ title, children }) => {
  return (
    <Container>
      { title && <Typography variant={'h2'}>{ title }</Typography> }
      { children }
    </Container>
  )
}

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
}

export default Page
