import { combineReducers } from 'redux'

import { heroesReducer as heroes } from './heroes'
import { routingReducer as routing } from './routing'
import { pageReducer as page } from './page'
import { filterReduces as filter } from './filter'

const reducer = combineReducers({
  heroes,
  routing,
  page,
  filter
})

export default reducer
