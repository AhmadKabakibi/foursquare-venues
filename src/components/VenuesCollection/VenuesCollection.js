import React from 'react'
import PropTypes from 'prop-types'
import Venue from '../Venue'
import { CardColumns } from 'reactstrap'

import './VenuesCollection.css'

const VenuesCollection = ({ venues }) => {
  return (
    <CardColumns>
      {venues.map(venue => {
        return <Venue data={venue} key={venue.id} />
      })}
    </CardColumns>
  )
}

VenuesCollection.propTypes = {
  venues: PropTypes.array.isRequired
}
export default VenuesCollection
