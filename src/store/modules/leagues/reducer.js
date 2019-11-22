import {FETCH_LEAGUES, SHOW_LEAGUE, FETCH_TEAMS, SHOW_TEAM} from './actions'

const INITIAL_STATE = {
    leagues: [],
    league: {},
    teams: [],
    team: {}
}

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_LEAGUES:
            return { ...state, leagues: action.payload }
        case SHOW_LEAGUE:
            return { ...state, league: action.payload }
        case FETCH_TEAMS:
            return { ...state, teams: action.payload }
        case SHOW_TEAM:
            return { ...state, team: action.payload }
        default:
            return state;
    }
}