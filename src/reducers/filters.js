import { handleActions } from 'redux-actions'
import { setFilterAction } from '../actions'

export const filters = handleActions({
  [setFilterAction]: (filters, { payload }) => Object.assign({}, filters, payload)
}, {})
