import { delay } from 'redux-saga'
import { take, put, fork, cancel } from 'redux-saga/effects'
import { FETCH_TICKERS_AND_SYNC, STOP_TICKERS_SYNC, tickersFetchedOkAction } from '../actions'

function* fetchTickersAndSync () {
  while(true) {
    const response = yield fetch(`${process.env.REACT_APP_BITFINEX_API_URL}${process.env.REACT_APP_TICKERS_API_PATH}`)
    const data = yield response.json()
    yield put(tickersFetchedOkAction(data))
    yield delay(process.env.REACT_APP_API_REFRESH_TIMEOUT)
  }
}

export function* fetchTickersAndSyncSaga () {
  while (true) {
    yield take(FETCH_TICKERS_AND_SYNC)
    const syncTask = yield fork(fetchTickersAndSync)
    yield take(STOP_TICKERS_SYNC)
    yield cancel(syncTask)
  }
}
