import React, { Component } from 'react'
import './App.css'

import configureStore from '../../configureStore'
import { Provider } from 'react-redux'

const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      </Provider>
    )
  }
}

export default App
