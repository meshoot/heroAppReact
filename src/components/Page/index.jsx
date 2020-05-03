import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import { Container } from '@material-ui/core'

const Page = ({ title, render, changeDocumentTitle }) => {
  useEffect(() => {
    changeDocumentTitle(title)
  }, [])

  return (
    <Container>
      { render && render() }
    </Container>
  )
}

Page.propTypes = {
  title: PropTypes.string,
  render: PropTypes.func,
  changeDocumentTitle: PropTypes.func
}

export default Page
