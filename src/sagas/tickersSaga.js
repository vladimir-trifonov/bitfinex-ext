import { take, put, spawn } from 'redux-saga/effects'
import { List } from 'immutable'

import {
    FETCH_TICKERS,
    tickersFetchedOkAction
} from './../actions'

function* fetchTickers() {
  try {
    const response = yield fetch(`${process.env.REACT_APP_BITFINEX_API_URL}tickers?symbols=ALL`, {
      headers: {
        Accept: 'application/json'
      }
    })
    const data = yield response.json()
    yield put(tickersFetchedOkAction(List(data)))
  } catch(e) {
    console.error(e)
  }
}

export function* fetchTickersSaga() {
    yield take(FETCH_TICKERS)
    yield spawn(fetchTickers)
}