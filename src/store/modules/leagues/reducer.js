import {FETCH_LEAGUES} from './actions'

const INITIAL_STATE = {
    leagues: [],
    league: {}
}

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_LEAGUES:
            return { ...state, leagues: action.payload }
        default:
            return state;
    }
}