import axios from 'axios';

import { FETCH_HEROES } from "../actions/actionTypes";

export function heroesReducer(state = [], action) {
    switch (action.type) {
        case FETCH_HEROES: {
            return async () => await axios.get('https://swapi.co/api/heroes')
        }
        default: {
            return state
        }
    }
}