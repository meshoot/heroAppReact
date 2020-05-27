import { SET_FILTER } from '../actions/actionTypes'

export function filterReduces (state = {}, action) {
  switch (action.type) {
    case SET_FILTER: {
      return {
        ...state,
        filter: action.filter
      }
    }
    default: {
      return state
    }
  }
}
