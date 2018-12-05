import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { history, configureStore } from '../../configureStore'
import Dashboard from '../Dashboard'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Fragment>
            <Route exact path="/" component={Dashboard} />
            <Route path="/tickers/:symbol" component={Dashboard} />
          </Fragment>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App
