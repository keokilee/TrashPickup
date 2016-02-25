/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, { Component } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-native-router-flux'

import TrashPickup from './TrashPickup'

import reducers from '../reducers'

const store = createStore(reducers)

class Root extends Component {
  render () {
    return (
      <Provider hideNavBar store={store}>
        <Router>
          <Route name='locationSearch' initial component={TrashPickup} title='Select Location' />
        </Router>
      </Provider>
    )
  }
}

export default Root
