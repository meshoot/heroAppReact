import React from 'react'

import { Container } from '@material-ui/core'

const Page = ({ children }) => {
  return (
    <Container>
      { children }
    </Container>
  )
}

export default Page
