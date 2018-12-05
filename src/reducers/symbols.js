import { handleActions } from 'redux-actions'
import { setCurrentSymbolAction } from '../actions'

export const symbols = handleActions({
  [setCurrentSymbolAction]: (state, action) => ({ current: action.payload })
}, 
  { current: null }
)
