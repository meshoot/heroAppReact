import { CHANGE_PAGE_TITLE } from '../actionTypes'

export function changePageTitle (title) {
  return {
    type: CHANGE_PAGE_TITLE,
    title
  }
}
