import React, { Navigator } from 'react-native'
import { connect } from 'react-redux'
import ReactNativeRouter, { Route, Schema } from 'react-native-router-flux'

import AddressEntry from './containers/AddressEntry'
import PickupTimers from './containers/PickupTimers'

const Router = connect()(ReactNativeRouter.Router)

export default class AppRouter extends React.Component {
  render () {
    return (
      <Router hideNavBar>
        <Schema name='modal' sceneConfig={Navigator.SceneConfigs.FloatFromBottom} />
        <Route schema='modal' name='locationSearch' initial component={AddressEntry} />
        <Route name='timers' component={PickupTimers} />
      </Router>
    )
  }
}
