import { takeLatest } from 'redux-saga/effects'

import {
  SET_CURRENT_SYMBOL
} from './../actions'

function* fetchTrades({ payload }) {
}

export function* fetchTradesSaga () {
  yield takeLatest(SET_CURRENT_SYMBOL, fetchTrades)
}