import React, { StyleSheet, PropTypes, View, Text } from 'react-native'
import { connect } from 'react-redux'

import { RegularPanel, RecyclingPanel, GreenWastePanel, BulkyItemPanel } from '../components/Panels'
class PickupTimers extends React.Component {
  render () {
    const { formatted_address } = this.props

    return (
      <View style={styles.container}>
        <RegularPanel />
        <RecyclingPanel />
        <GreenWastePanel />
        <BulkyItemPanel />
        <Text style={styles.address}>Pickup Times for {formatted_address}</Text>
      </View>
    )
  }
}

PickupTimers.propTypes = {
  formatted_address: PropTypes.string
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center'
  },

  panel: {
    flex: 2,
    padding: 10,
    backgroundColor: '#424242'
  },
  greenWastePanel: {
    backgroundColor: '#2E7D32'
  },
  recyclingPanel: {
    backgroundColor: '#1565C0'
  },

  panelText: {
    color: 'white'
  },
  panelHeader: {
    fontSize: 20,
    textAlign: 'right'
  },
  panelTimer: {
    fontSize: 45
  },
  panelDetail: {
    fontSize: 15
  },

  address: {
    flex: 1
  }
})

function mapStateToProps ({ location }) {
  return {
    formatted_address: location.formatted_address
  }
}

export default connect(mapStateToProps)(PickupTimers)
