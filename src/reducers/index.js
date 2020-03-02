import { combineReducers } from "redux";

import * as heroesReducer from './heroes';

const reducer = combineReducers(heroesReducer);

export default reducer;