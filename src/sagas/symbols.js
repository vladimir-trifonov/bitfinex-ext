import { takeEvery, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import { formatSymbol } from '../utils'
import { CURRENT_SYMBOL_CHANGED } from '../actions'

function* navigateToTradingPage ({ payload: symbol }) {
  yield put(push(`/trading/${formatSymbol(symbol, true)}`))
}

export function* navigateToTradingPageSaga () {
  yield takeEvery(CURRENT_SYMBOL_CHANGED, navigateToTradingPage)
}
