import { takeLatest, put } from 'redux-saga/effects'
import { List } from 'immutable'

import {
  FETCH_TRADES,
  tradesFetchedOkAction
} from './../actions'

function* fetchTrades({ payload: symbol }) {
  const response = yield fetch(`${process.env.REACT_APP_BITFINEX_API_URL}trades/${symbol}/hist`)
  const data = yield response.json()
  yield put(tradesFetchedOkAction(List(data)))
}

export function* fetchTradesSaga () {
  yield takeLatest(FETCH_TRADES, fetchTrades)
}