import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { initSagas } from './initSagas'
import { reducer } from './combineReducers'

const __DEV__ = process.env.NODE_ENV === 'development'

export default function () {
  const sagaMiddleware = createSagaMiddleware()
  const middleWares = [sagaMiddleware]
  
  const composeEnhancers = (__DEV__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) 
      : compose
  const enhancer = composeEnhancers(applyMiddleware(...middleWares))

  const store = createStore(
    reducer,
    enhancer
  )

  initSagas(sagaMiddleware)
  return store
}
