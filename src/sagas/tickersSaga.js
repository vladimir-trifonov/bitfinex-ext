import { delay } from 'redux-saga'
import { take, takeLatest, put, fork } from 'redux-saga/effects'
import { List } from 'immutable'
import { push } from 'connected-react-router'

import {
  SET_CURRENT_SYMBOL,
  FETCH_TICKERS,
  tickersFetchedOkAction
} from './../actions'

function* fetchTickers () {
  while(true) {
    try {
      const response = yield fetch(`${process.env.REACT_APP_BITFINEX_API_URL}tickers?symbols=ALL`)
      const data = yield response.json()
      yield put(tickersFetchedOkAction(List(data)))
    } catch(e) {
      yield put(tickersFetchedOkAction(List({})))
    }

    yield delay(5000)
  }
}

export function* fetchTickersSaga () {
  yield take(FETCH_TICKERS)
  yield fork(fetchTickers)
}

function* navigateToTickerView ({ payload }) {
  yield put(push(`/tickers/${payload}`))
}

export function* navigateToTickerViewSaga () {
  yield takeLatest(SET_CURRENT_SYMBOL, navigateToTickerView)
}