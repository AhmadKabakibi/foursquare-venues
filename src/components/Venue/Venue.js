import React from 'react'
import PropTypes from 'prop-types'

const openVenueMap = data => {
  return () =>
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURI(
        data.name
      )}%20${encodeURI(data.location.formattedAddress[0])}`
    )
}

const Venue = ({ data }) => {
  return <div onClick={openVenueMap(data)}>{data.name}</div>
}

Venue.propTypes = {
  data: PropTypes.object.isRequired
}

export default Venue
