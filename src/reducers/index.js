import { combineReducers } from 'redux'

import { heroesReducer as heroes } from './heroes'

const reducer = combineReducers({
  heroes
})

export default reducer
