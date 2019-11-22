import { call, takeLatest, put } from 'redux-saga/effects';
import * as actions from './actions'
import { api } from '../../../helpers/functions'

const Pace = require('pace-js')
Pace.start();

export function* watchFetchLeagues() {
    yield takeLatest(actions.FETCH_LEAGUES_FLAG, index)
}

export function* index(action) {

    try {
        
        const leagues = yield call(api, `http://api.football-data.org/v2/competitions`, 'get')
        yield put(actions.fetchLeagues(leagues.data.competitions))

    } catch (error) {
        console.log(error)
    }
}

export function* watchShowLeague() {
    yield takeLatest(actions.SHOW_LEAGUE_FLAG, showLeague)
}

export function* showLeague(action) {
    try {

        let id = 2000 // any id rather than 2000 throws a 403 error

        const league = yield call(api, `http://api.football-data.org/v2/competitions/${id}/teams`, 'GET')

        yield put(actions.showLeague(league.data.competition))

        yield put(actions.fetchTeams(league.data.teams))

    } catch (error) {

        console.log(error)
    }

}

export function* watchShowTeam(){
    yield takeLatest(actions.SHOW_TEAM_FLAG, showTeam)
}

export function* showTeam(action){
    
    try {
        const team = yield call(api, `https://api.football-data.org/v2/teams/${action.payload.id}`, 'GET')

        yield put(actions.showTeam(team.data))
        
    } catch (error) {
        
    }
}
