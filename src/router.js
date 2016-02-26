import React from 'react-native'
import { connect } from 'react-redux'
import ReactNativeRouter, { Route } from 'react-native-router-flux'

import AddressEntry from './containers/AddressEntry'
import PickupTimers from './containers/PickupTimers'

const Router = connect()(ReactNativeRouter.Router)

export default class AppRouter extends React.Component {
  render () {
    return (
      <Router hideNavBar>
        <Route name='locationSearch' initial component={AddressEntry} />
        <Route name='timers' component={PickupTimers} />
      </Router>
    )
  }
}
