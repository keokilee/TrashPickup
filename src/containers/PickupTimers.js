import React, { StyleSheet, PropTypes, View, Text } from 'react-native'
import { connect } from 'react-redux'

class PickupTimers extends React.Component {
  render () {
    const { formatted_address } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.panel}>
          <Text>Panel</Text>
        </View>
        <View style={styles.panel}>
          <Text>Panel</Text>
        </View>
        <View style={styles.panel}>
          <Text>Panel</Text>
        </View>
        <View style={styles.panel}>
          <Text>Panel</Text>
        </View>
        <Text>Pickup Times for {formatted_address}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center'
  },
  panel: {
    flex: 1,
    backgroundColor: '#424242'
  }
})

PickupTimers.propTypes = {
  formatted_address: PropTypes.string
}

function mapStateToProps ({ location }) {
  return {
    formatted_address: location.formatted_address
  }
}
export default connect(mapStateToProps)(PickupTimers)
