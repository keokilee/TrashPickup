import React, { StyleSheet, PropTypes, View, Text } from 'react-native'
import { connect } from 'react-redux'
import moment from 'moment'

import { RegularPanel, RecyclingPanel, GreenWastePanel, BulkyItemPanel } from '../components/Panels'
class PickupTimers extends React.Component {
  nextBulkyPickupDate (day) {
    const today = moment()
    const [number, dayOfWeek] = day.split(' ')

    const weeks = +number[0] - 1
    let nextDate = moment().date(1).day(dayOfWeek).add(weeks, 'weeks')

    if (nextDate < today) {
      nextDate = moment().add(1, 'month').date(1).day(dayOfWeek).add(weeks, 'weeks')
    }

    return nextDate.toDate()
  }

  nextPickupDate (day) {
    const today = moment()
    let nextDate = moment().day(day)

    if (nextDate < today) {
      nextDate.add(7, 'days')
    }

    return nextDate.toDate()
  }

  createPanels () {
    const { pickupDay, recycleDay, bulkyDay } = this.props
    const pickupDate = this.nextPickupDate(pickupDay)
    const recyclingDate = this.nextPickupDate(recycleDay)
    const greenWasteDate = this.nextPickupDate(recycleDay)
    const bulkyDate = this.nextBulkyPickupDate(bulkyDay)

    const panels = [
      [ RegularPanel, pickupDate ],
      [ RecyclingPanel, recyclingDate ],
      [ GreenWastePanel, greenWasteDate ],
      [ BulkyItemPanel, bulkyDate ]
    ]

    return panels.sort((a, b) => {
      if (a[1] < b[1]) {
        return -1
      }

      return 1
    })
  }

  render () {
    const { formatted_address } = this.props

    return (
      <View style={styles.container}>
        {this.createPanels().map(([Panel, date], index) =>
          <Panel pickupDate={date} key={`panel${index}`} />
        )}
        <View style={styles.addressContainer}>
          <Text style={styles.address}>Pickup Times for {formatted_address}</Text>
        </View>
      </View>
    )
  }
}

PickupTimers.propTypes = {
  formatted_address: PropTypes.string,
  pickupDay: PropTypes.string,
  recycleDay: PropTypes.string,
  bulkyDay: PropTypes.string
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    justifyContent: 'center'
  },

  addressContainer: {
    flex: 1,
    padding: 10
  }
})

function mapStateToProps ({ location, pickupDays }) {
  const { pickupDay, recycleDay, bulkyDay } = pickupDays

  return {
    formatted_address: location.formatted_address,
    pickupDay,
    recycleDay,
    bulkyDay
  }
}

export default connect(mapStateToProps)(PickupTimers)
