import React from 'react'
import PropTypes from 'prop-types'
import Venue from '../Venue'

import './VenuesCollection.css'

const VenuesCollection = ({ venues }) => {
  return (
    <div className="">
      {venues.map(venue => {
        return <Venue data={venue} key={venue.id} />
      })}
    </div>
  )
}

VenuesCollection.propTypes = {
  venues: PropTypes.array.isRequired
}
export default VenuesCollection
