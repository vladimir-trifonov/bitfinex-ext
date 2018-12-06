import { takeEvery, call } from 'redux-saga/effects'
import socket from '../socket'
import {
  SOCKET_SUBSCRIBE,
  SOCKET_UNSUBSCRIBE
} from '../actions'

export function* socketSubscribeSaga () {
  yield takeEvery(SOCKET_SUBSCRIBE, function* ({ payload: { channel, symbol } }) {
    yield call(socket.subscribe, channel, symbol, true)
  })
}

export function* socketUnsubscribeSaga () {
  yield takeEvery(SOCKET_UNSUBSCRIBE, function* ({ payload: { channel } }) {
    yield call(socket.unsubscribe, channel)
  })
}
