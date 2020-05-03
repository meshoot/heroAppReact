import qs from 'qs'
import axios from 'axios'

import {
  FETCH_HEROES,
  FETCH_HEROES_FAILURE,
  FETCH_HEROES_SUCCESS
} from './actionTypes'
import { API_URL } from './../../constants/'

function requestHeroes () {
  return {
    type: FETCH_HEROES,
    loading: true
  }
}

function requestHeroesSuccess (data) {
  return {
    type: FETCH_HEROES_SUCCESS,
    data
  }
}

function requestHeroesFail (error) {
  return {
    type: FETCH_HEROES_FAILURE,
    error
  }
}

export function fetchHeroes (params) {
  if (params) {
    const query = {
      ...qs.parse(window.location.search, { ignoreQueryPrefix: true }),
      ...params
    }

    window.location.search = qs.stringify(query)
  }

  return dispatch => {
    dispatch(requestHeroes())
    const query = qs.parse(window.location.search, { ignoreQueryPrefix: true })
    const { page, search } = query

    axios(`${API_URL}people`, { params: { page, search } }).then(
      resolve => dispatch(requestHeroesSuccess(resolve.data)),
      error => {
        console.log(error)
        return dispatch(requestHeroesFail(error))
      }
    )
  }
}
