import React, {
  Component,
  PropTypes,
  StyleSheet,
  View,
  Text
} from 'react-native'
import { connect } from 'react-redux'

import { setLocation } from '../actions'
import globalStyles from './globalStyles'
import AddressInput from '../components/AddressInput'

class TrashPickup extends Component {
  onChangeLocation = (location, details) => {
    const { dispatch } = this.props
    dispatch(setLocation(location, details))
  };

  render () {
    return (
      <View style={globalStyles.container}>
        <AddressInput onChangeLocation={this.onChangeLocation} />
        <View style={styles.welcomeContainer}>
          <Text style={[globalStyles.header, styles.welcomeHeader]}>
            Opala
          </Text>
          <Text style={styles.welcomeSubheader}>
            Find the trash collection pickup times in your neighborhood. Start by entering your address
          </Text>
        </View>
      </View>
    )
  }
}

TrashPickup.propTypes = {
  dispatch: PropTypes.func
}

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    padding: 20
  },
  welcomeHeader: {
    color: 'white',
    textAlign: 'center'
  },
  welcomeSubheader: {
    color: 'white',
    marginTop: 10,
    fontSize: 20
  }
})

export default connect()(TrashPickup)
