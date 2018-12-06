import { takeEvery, call } from 'redux-saga/effects'
import socket from '../socket'
import {
  SOCKET_SUBSCRIBE,
  SOCKET_UNSUBSCRIBE
} from '../actions'

function* socketSubscribe ({ payload: { channel, symbol } }) {
  yield call(socket.subscribe, channel, symbol, true)
}

export function* socketSubscribeSaga () {
  yield takeEvery(SOCKET_SUBSCRIBE, socketSubscribe)
}

function* socketUnsubscribe ({ payload: { channel } }) {
  yield call(socket.unsubscribe, channel)
}

export function* socketUnsubscribeSaga () {
  yield takeEvery(SOCKET_UNSUBSCRIBE, socketUnsubscribe)
}
