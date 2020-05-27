import { ROUTING_PAGE } from '../actions/actionTypes'

export function routingReducer (state = { title: '' }, action) {
  switch (action.type) {
    case ROUTING_PAGE : {
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
