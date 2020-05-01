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

export function fetchHeroes () {
  return dispatch => {
    dispatch(requestHeroes())

    axios(`${API_URL}people`).then(
      resolve => dispatch(requestHeroesSuccess(resolve.data)),
      error => {
        console.log(error)
        return dispatch(requestHeroesFail(error))
      }
    )
  }
}
