import { handleActions } from 'redux-actions'
import { symbolsFetchedOkAction } from '../actions'
import { List } from 'immutable'

export const symbols = handleActions({
  [symbolsFetchedOkAction]: (state, action) => List(action.payload)
}, List([]))
