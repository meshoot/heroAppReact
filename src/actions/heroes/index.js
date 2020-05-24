import axios from 'axios'

import {
  FETCH_HEROES,
  FETCH_HEROES_FAILURE,
  FETCH_HEROES_SUCCESS,
  ADD_HERO_TO_FAVORITE,
  REMOVE_HERO_FROM_FAVORITE,
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
  return dispatch => {
    dispatch(requestHeroes())

    axios(`${API_URL}people`, { params }).then(
      resolve => dispatch(requestHeroesSuccess(resolve.data)),
      error => {
        console.log(error)
        return dispatch(requestHeroesFail(error))
      }
    )
  }
}

export function addHeroToFavorite (hero) {
  return {
    type: ADD_HERO_TO_FAVORITE,
    hero
  }
}

export function removeHeroFromFavorite (hero) {
  return {
    type: REMOVE_HERO_FROM_FAVORITE,
    hero
  }
}