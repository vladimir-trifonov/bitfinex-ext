import { delay } from 'redux-saga'
import { take, put, fork, cancel } from 'redux-saga/effects'
import {
  FETCH_TICKERS,
  STOP_TICKERS_SYNC,
  tickersFetchedOkAction
} from './../actions'

function* fetchTickers () {
  while(true) {
    const response = yield fetch(`${process.env.REACT_APP_BITFINEX_API_URL}/v2/tickers?symbols=ALL`)
    const data = yield response.json()
    yield put(tickersFetchedOkAction(data))
    yield delay(process.env.REACT_APP_API_REFRESH_TIMEOUT)
  }
}

export function* fetchTickersSaga () {
  while (true) {
    yield take(FETCH_TICKERS)
    const syncTask = yield fork(fetchTickers)
    yield take(STOP_TICKERS_SYNC)
    yield cancel(syncTask)
  }
}
