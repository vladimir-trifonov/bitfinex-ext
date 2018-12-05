import { takeLatest } from 'redux-saga/effects'

import {
  CURRENT_TICKER_CHANGED
} from './../actions'

function* fetchTrades({ payload }) {
}

export function* fetchTradesSaga () {
  yield takeLatest(CURRENT_TICKER_CHANGED, fetchTrades)
}