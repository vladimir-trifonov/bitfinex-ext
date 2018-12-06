import { createAction } from 'redux-actions'

export const FETCH_RESOURCE = 'FETCH_RESOURCE'
export const STOP_RESOURCE_SYNC = 'STOP_RESOURCE_SYNC'

export const fetchResourceAction = createAction(FETCH_RESOURCE)
export const stopResourceSyncAction = createAction(STOP_RESOURCE_SYNC)