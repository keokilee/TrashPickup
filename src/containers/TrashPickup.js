/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, {
  Component,
  PropTypes,
  StyleSheet,
  View
} from 'react-native'

import { connect } from 'react-redux'

import { setLocation } from '../actions'
import AddressInput from '../components/AddressInput'

class TrashPickup extends Component {
  onChangeLocation (location) {
    const { dispatch } = this.props

    // TODO: Navigate to timer view
    dispatch(setLocation(location))
  }

  render () {
    return (
      <View style={styles.container}>
        <AddressInput onChangeLocation={this.onChangeLocation} />
      </View>
    )
  }
}

TrashPickup.propTypes = {
  dispatch: PropTypes.func
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
})

export default connect()(TrashPickup)
