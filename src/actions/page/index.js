import { CHANGE_PAGE_TITLE } from './ActionTypes'

export function changePageTitle (title) {
  return {
    type: CHANGE_PAGE_TITLE,
    title
  }
}
