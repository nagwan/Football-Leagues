import { all } from 'redux-saga/effects';

import {watchFetchLeagues} from './modules/leagues/sagas'

export default function* root() {
    yield all([
        watchFetchLeagues()
    ])

}