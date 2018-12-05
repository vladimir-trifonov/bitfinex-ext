import { delay } from 'redux-saga'
import { take, takeLatest, put, fork, cancel } from 'redux-saga/effects'
import { List } from 'immutable'
import { push } from 'connected-react-router'
import {
  CURRENT_TICKER_CHANGED,
  FETCH_TICKERS,
  STOP_TICKERS_SYNC,
  tickersFetchedOkAction
} from './../actions'

function* fetchTickers () {
  while(true) {
    const response = yield fetch(`${process.env.REACT_APP_BITFINEX_API_URL}tickers?symbols=ALL`)
    const data = yield response.json()
    yield put(tickersFetchedOkAction(List(data)))
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

function* navigateToTickerView ({ payload }) {
  yield put(push(`/tickers/${payload}`))
}

export function* navigateToTickerViewSaga () {
  yield takeLatest(CURRENT_TICKER_CHANGED, navigateToTickerView)
}