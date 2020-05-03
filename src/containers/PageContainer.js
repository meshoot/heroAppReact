import { connect } from 'react-redux'

import Page from './../components/Page/'

import { changePageTitle } from './../actions/page/'

const mapStateToProps = store => ({
  ...store
})

const mapDispatchToProps = dispatch => ({
  changeDocumentTitle: title => {
    document.title = title
    dispatch(changePageTitle(title))
  }
})

const PageContainer = connect(mapStateToProps, mapDispatchToProps)(Page)

export default PageContainer
