import React, {
  Component,
  PropTypes,
  StyleSheet,
  View,
  Text
} from 'react-native'
import { connect } from 'react-redux'

import { setLocation } from '../actions'
import AddressInput from '../components/AddressInput'

class TrashPickup extends Component {
  onChangeLocation = (location, details) => {
    const { dispatch } = this.props
    dispatch(setLocation(location, details))
  };

  render () {
    return (
      <View style={styles.container}>
        <AddressInput onChangeLocation={this.onChangeLocation} />
        <View style={styles.welcomeContainer}>
          <Text>Welcome to Trash Pickup! Start by entering your home address.</Text>
        </View>
      </View>
    )
  }
}

TrashPickup.propTypes = {
  dispatch: PropTypes.func
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center'
  },
  welcomeContainer: {
    flex: 1,
    alignItems: 'center'
  }
})

export default connect()(TrashPickup)
