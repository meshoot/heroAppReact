import { combineReducers } from 'redux'

import { heroesReducer as heroes } from './heroes'
import { routingReducer as routing } from './routing'
import { pageReducer as page } from './page'

const reducer = combineReducers({
  heroes,
  routing,
  page
})

export default reducer
