import { createAction } from 'redux-actions'

export const WS_SUBSCRIBE = 'WS_SUBSCRIBE'
export const WS_UNSUBSCRIBE = 'WS_UNSUBSCRIBE'

export const wsSubscribeAction = createAction(WS_SUBSCRIBE)
export const wsUnsubscribeAction = createAction(WS_UNSUBSCRIBE)