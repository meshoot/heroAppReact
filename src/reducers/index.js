import { combineReducers } from 'redux'

import { heroesReducer as heroes } from './heroes'
import { routingReducer as routing } from './routing'

const reducer = combineReducers({
  heroes,
  routing
})

export default reducer
