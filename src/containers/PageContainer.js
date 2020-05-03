import { connect } from 'react-redux'

import Page from './../components/Page/'

import { changePageTitle } from './../actions/page/'
import { APP_NAME } from './../constants/'

const mapStateToProps = store => ({
  ...store
})

const mapDispatchToProps = dispatch => ({
  changeDocumentTitle: title => {
    document.title = title || APP_NAME
    dispatch(changePageTitle(title))
  }
})

const PageContainer = connect(mapStateToProps, mapDispatchToProps)(Page)

export default PageContainer
