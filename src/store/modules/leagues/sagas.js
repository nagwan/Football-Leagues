import { call, takeLatest, put } from 'redux-saga/effects';
import * as actions from './actions'
import { api } from '../../../helpers/functions'

export function* watchFetchLeagues(){
    yield takeLatest(actions.FETCH_LEAGUES_FLAG, index)
}

export function* index(action){

    try {
        console.log('here')

        const leagues = yield call(api, `http://api.football-data.org/v2/competitions`, null, 'get')

        console.log(leagues.data.competitions[1], 'leagues response')

        yield put(actions.fetchLeagues(leagues.data.competitions))
        
        
    } catch (error) {
        console.log('here error', error)
        
    }

}