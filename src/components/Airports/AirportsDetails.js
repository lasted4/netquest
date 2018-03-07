import React from 'react'
import PropTypes from 'prop-types'

import AirportsFilter from './AirportsFilter'
import AirportsTable from './AirportsTable'

const AirportsDetails = ({airports, setFilter}) => {
  if (airports.length) {
    return (
      <div className='AirportsDetails'>
        <AirportsFilter setFilter={setFilter} />
        <AirportsTable airports={airports} />
      </div>
    )
  }

  return (
    <h2>No data found for this country code.</h2>
  )
}

AirportsDetails.propTypes = {
  airports: PropTypes.array.isRequired,
  setFilter: PropTypes.func.isRequired
}

  
export default AirportsDetails
  