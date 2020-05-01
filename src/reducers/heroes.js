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
        loading: action.loading
      }
    }
    case FETCH_HEROES_FAILURE: {
      return {
        ...state,
        errors: action.errors,
        loading: false,
        lastUpdate: new Date()
      }
    }
    case FETCH_HEROES_SUCCESS: {
      const cutId = url => /people\/(.*?)\//.exec(url)[1]
      const data = {
        ...action.data,
        results: action.data.results.map(hero => (
          {
            ...hero,
            id: cutId(hero.url),
            photo: `https://starwars-visualguide.com/#/characters/${cutId(hero.url)}`
          }))
      }

      return {
        ...state,
        loading: false,
        lastUpdate: new Date(),
        needUpdate: false,
        data
      }
    }
    default: {
      return state
    }
  }
}
