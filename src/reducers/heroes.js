import {
  FETCH_HEROES,
  FETCH_HEROES_FAILURE,
  FETCH_HEROES_SUCCESS
} from '../actions/heroes/actionTypes'

export function heroesReducer (state = {
  loading: false, errors: [], lastUpdate: null, data: []
}, action) {
  switch (action.type) {
    case FETCH_HEROES: {
      return {
        ...state,
        heroes: {
          ...state.heroes,
          loading: action.loading
        }
      }
    }
    case FETCH_HEROES_FAILURE: {
      return {
        ...state,
        heroes: {
          ...state.heroes,
          errors: action.errors,
          loading: false,
          lastUpdate: new Date()
        }
      }
    }
    case FETCH_HEROES_SUCCESS: {
      return {
        ...state,
        heroes: {
          ...state.heroes,
          loading: false,
          lastUpdate: new Date(),
          needUpdate: false,
          data: action.heroes
        }
      }
    }
    default: {
      return state
    }
  }
}
