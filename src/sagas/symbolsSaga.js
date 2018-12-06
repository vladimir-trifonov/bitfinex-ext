import { take, takeEvery, put, fork } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { formatSymbol } from '../utils'
import {
  CURRENT_SYMBOL_CHANGED,
  FETCH_SYMBOLS,
  symbolsFetchedOkAction
} from './../actions'

function* fetchSymbols () {
  try {
    const response = yield fetch(`${process.env.REACT_APP_BITFINEX_API_URL}/v1/symbols`)
    const data = yield response.json()
    yield put(symbolsFetchedOkAction(data))
  } catch (e) {
    yield put(symbolsFetchedOkAction([]))
  }
}

export function* fetchSymbolsSaga () {
  yield take(FETCH_SYMBOLS)
  yield fork(fetchSymbols)
}

function* navigateToTradingPage ({ payload: symbol }) {
  yield put(push(`/trading/${formatSymbol(symbol, true)}`))
}

export function* navigateToTradingPageSaga () {
  yield takeEvery(CURRENT_SYMBOL_CHANGED, navigateToTradingPage)
}
