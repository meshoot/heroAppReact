import { FETCH_HEROES } from "./actionTypes";

export function fetchHeroes(heroes) {
    return {
        type: FETCH_HEROES,
        heroes
    }
}