import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import {
  tickers
} from './reducers'

export default (history) => combineReducers({
  router: connectRouter(history),
  tickers
})
