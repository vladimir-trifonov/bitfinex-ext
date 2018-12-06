import { delay } from 'redux-saga'
import { take, put, fork, cancel } from 'redux-saga/effects'
import actions, {
  FETCH_RESOURCE,
  STOP_RESOURCE_SYNC
} from '../actions'

function* fetchResource (resource) {
  while(true) {
    const response = yield fetch(`${process.env.REACT_APP_BITFINEX_API_URL}${process.env[`REACT_APP_${resource.toUpperCase()}_API_PATH`]}`)
    const data = yield response.json()
    yield put(actions[`${resource}FetchedOkAction`](data))
    yield delay(process.env.REACT_APP_API_REFRESH_TIMEOUT)
  }
}

export function* fetchResourceSaga () {
  while (true) {
    const { payload: resource } = yield take(FETCH_RESOURCE)
    const syncTask = yield fork(fetchResource, resource)
    yield take(STOP_RESOURCE_SYNC)
    yield cancel(syncTask)
  }
}
