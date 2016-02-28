import React, { StyleSheet, PropTypes, View, Text } from 'react-native'
import moment from 'moment'

class Panel extends React.Component {
  timerLabel () {
    const { pickupDate } = this.props
    if (!pickupDate) {
      return 'No information available'
    }

    const today = moment()
    if (moment(pickupDate).isSame(today, 'day')) {
      return 'Today'
    }

    const diff = Math.abs(today.diff(pickupDate, 'days')) + 1
    if (diff === 1) {
      return '1 day'
    }

    return `${diff} days`
  }

  nextLabel () {
    const { pickupDate } = this.props
    if (!pickupDate) {
      return ''
    }

    const today = moment()

    if (moment(pickupDate).isSame(today, 'day')) {
      return ''
    }

    const diff = Math.abs(today.diff(pickupDate, 'days')) + 1
    if (diff === 1) {
      return 'Next pickup is tomorrow'
    }

    return `Next pickup is ${moment(pickupDate).format('dddd, MMMM Do')}`
  }

  render () {
    const { panelStyle, panelTitle } = this.props
    const panelStyles = [styles.panel, panelStyle]

    return (
      <View style={panelStyles}>
        <Text style={[ styles.panelText, styles.panelHeader ]}>{panelTitle}</Text>
        <Text style={[ styles.panelText, styles.panelTimer ]}>{this.timerLabel()}</Text>
        <Text style={[ styles.panelText, styles.panelDetail ]}>{this.nextLabel()}</Text>
      </View>
    )
  }
}

Panel.propTypes = {
  panelStyle: PropTypes.number,
  pickupDate: PropTypes.object,
  panelTitle: PropTypes.string.isRequired
}

export function RegularPanel (props) {
  return (
    <Panel panelTitle='Regular' {...props} />
  )
}

export function RecyclingPanel (props) {
  return (
    <Panel panelStyle={styles.recyclingPanel} panelTitle='Recycling' {...props} />
  )
}

export function GreenWastePanel (props) {
  return (
    <Panel panelStyle={styles.greenWastePanel} panelTitle='Green Waste' {...props} />
  )
}

export function BulkyItemPanel (props) {
  return (
    <Panel panelTitle='Bulky Items' {...props} />
  )
}

const styles = StyleSheet.create({
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
  }
})
