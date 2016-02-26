import React, { StyleSheet, PropTypes, View, Text } from 'react-native'

class Panel extends React.Component {
  render () {
    const { panelStyle, panelTitle } = this.props
    console.log(panelStyle)
    const panelStyles = [styles.panel, panelStyle]

    return (
      <View style={panelStyles}>
        <Text style={[ styles.panelText, styles.panelHeader ]}>{panelTitle}</Text>
        <Text style={[ styles.panelText, styles.panelTimer ]}>3 days</Text>
        <Text style={[ styles.panelText, styles.panelDetail ]}>Next pickup is on Tuesday</Text>
      </View>
    )
  }
}

Panel.propTypes = {
  panelStyle: PropTypes.number,
  panelTitle: PropTypes.string.isRequired
}

export function RegularPanel (props) {
  return (
    <Panel panelTitle='Regular' />
  )
}

export function RecyclingPanel (props) {
  return (
    <Panel panelStyle={styles.recyclingPanel} panelTitle='Recycling' />
  )
}

export function GreenWastePanel (props) {
  return (
    <Panel panelStyle={styles.greenWastePanel} panelTitle='Green Waste' />
  )
}

export function BulkyItemPanel (props) {
  return (
    <Panel panelTitle='Bulky Items' />
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
