import { all } from 'redux-saga/effects';

import {watchFetchLeagues, watchShowLeague, watchShowTeam} from './modules/leagues/sagas'

export default function* root() {
    yield all([
        watchFetchLeagues(),
        watchShowLeague(),
        watchShowTeam()
    ])

}