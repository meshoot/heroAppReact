import { CHANGE_PAGE_TITLE } from './../actions/page/ActionTypes'

export function pageReducer (state = { title: '' }, action) {
  switch (action.type) {
    case CHANGE_PAGE_TITLE: {
      return {
        ...state,
        title: action.title
      }
    }
    default: {
      return state
    }
  }
}
