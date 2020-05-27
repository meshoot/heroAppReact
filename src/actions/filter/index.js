import { SET_FILTER } from '../actionTypes'

export function changeFilter (filter) {
  return {
    type: SET_FILTER,
    filter
  }
}
