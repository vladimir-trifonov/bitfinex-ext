import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import configureStore from '../../configureStore'
import Dashboard from '../Dashboard'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Dashboard} />
        </Router>
      </Provider>
    )
  }
}

export default App
