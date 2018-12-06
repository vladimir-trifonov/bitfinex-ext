import { take, put, fork } from 'redux-saga/effects'
import actions, { FETCH_RESOURCE } from '../actions'

const getResourceUrl = (resource) => `${process.env.REACT_APP_BITFINEX_API_URL}${process.env[`REACT_APP_${resource.toUpperCase()}_API_PATH`]}`

function* fetchResource (resource) {
  const response = yield fetch(getResourceUrl(resource))
  const data = yield response.json()
  yield put(actions[`${resource}FetchedOkAction`](data))
}

export function* fetchResourceSaga () {
  const { payload: resource } = yield take(FETCH_RESOURCE)
  yield fork(fetchResource, resource)
}
