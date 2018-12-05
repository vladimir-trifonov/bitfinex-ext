import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import {
  tickers, 
  symbols
} from './reducers'

export default (history) => combineReducers({
  router: connectRouter(history),
  tickers,
  symbols
})
