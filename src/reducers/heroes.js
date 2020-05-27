import {
  FETCH_HEROES,
  FETCH_HEROES_FAILURE,
  FETCH_HEROES_SUCCESS,
  ADD_HERO_TO_FAVORITE,
  REMOVE_HERO_FROM_FAVORITE
} from '../actions/actionTypes'

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
        totalPages: Math.ceil(action.data.count / 10),
        results: action.data.results.map(hero => (
          {
            ...hero,
            id: cutId(hero.url),
            photo: `https://starwars-visualguide.com/assets/img/characters/${cutId(hero.url)}.jpg`
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
    case ADD_HERO_TO_FAVORITE: {
      const { hero } = action
      const data = state.data.results.map(heroItem => heroItem.id === hero.id ? { ...heroItem, liked: true } : heroItem)

      return [...state, data]
    }
    case REMOVE_HERO_FROM_FAVORITE: {
      const { hero } = action
      const data = state.data.results.map(heroItem => heroItem.id === hero.id ? { ...heroItem, liked: false } : heroItem)

      return { ...state, data }
    }
    default: {
      return state
    }
  }
}
