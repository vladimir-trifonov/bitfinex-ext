import { delay } from 'redux-saga'
import { take, put, fork, cancel } from 'redux-saga/effects'
import actions, {
  FETCH_RESOURCE,
  FETCH_RESOURCE_AND_SYNC,
  STOP_RESOURCE_SYNC
} from '../actions'

const getResourceUrl = (resource) => `${process.env.REACT_APP_BITFINEX_API_URL}${process.env[`REACT_APP_${resource.toUpperCase()}_API_PATH`]}`

function* fetchResourceAndSync (resource) {
  while(true) {
    const response = yield fetch(getResourceUrl(resource))
    const data = yield response.json()
    yield put(actions[`${resource}FetchedOkAction`](data))
    yield delay(process.env.REACT_APP_API_REFRESH_TIMEOUT)
  }
}

export function* fetchResourceAndSyncSaga () {
  while (true) {
    const { payload: resource } = yield take(FETCH_RESOURCE_AND_SYNC)
    const syncTask = yield fork(fetchResourceAndSync, resource)
    yield take(STOP_RESOURCE_SYNC)
    yield cancel(syncTask)
  }
}

function* fetchResource (resource) {
  const response = yield fetch(getResourceUrl(resource))
  const data = yield response.json()
  yield put(actions[`${resource}FetchedOkAction`](data))
}

export function* fetchResourceSaga () {
  const { payload: resource } = yield take(FETCH_RESOURCE)
  yield fork(fetchResource, resource)
}
