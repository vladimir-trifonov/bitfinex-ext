import { takeEvery, call } from 'redux-saga/effects'
import ws from '../ws'
import {
  WS_SUBSCRIBE,
  WS_UNSUBSCRIBE
} from './../actions'

function* wsSubscribe({ payload: { channel, symbol } }) {
  yield call(ws.subscribe, channel, symbol, true)
}

export function* wsSubscribeSaga () {
  yield takeEvery(WS_SUBSCRIBE, wsSubscribe)
}

function* wsUnsubscribe({ payload: { channel } }) {
  yield call(ws.unsubscribe, channel)
}

export function* wsUnsubscribeSaga () {
  yield takeEvery(WS_UNSUBSCRIBE, wsUnsubscribe)
}
