import { takeLatest, put, call, fork, take } from 'redux-saga/effects'
import { List } from 'immutable'
import ws from '../ws'
import {
  FETCH_TRADES,
  STOP_TRADES_SYNC,
  tradesFetchedOkAction
} from './../actions'

function* fetchTrades({ payload: symbol }) {
  const response = yield fetch(`${process.env.REACT_APP_BITFINEX_API_URL}trades/${symbol}/hist`)
  const data = yield response.json()
  yield put(tradesFetchedOkAction(List(data)))
  yield call(ws.subscribe, 'trades', symbol, true)
}

export function* fetchTradesSaga () {
  yield takeLatest(FETCH_TRADES, fetchTrades)
}

function* stopTradesSync() {
  yield call(ws.unsubscribe, 'trades')
}

export function* stopTradesSyncSaga () {
  yield take(STOP_TRADES_SYNC)
  yield fork(stopTradesSync)
}