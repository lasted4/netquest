import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import AirportsDetails from './AirportsDetails'
import './Airports.css'

class Airports extends React.Component {
  static propTypes = {
    airports: PropTypes.array.isRequired,
    loadAirports: PropTypes.func.isRequired,
    setAirportFilter: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.props.loadAirports(this.props.match.params.countryCode)
  }

  render () {
    const {airports, setAirportFilter} = this.props

    return (
      <div>
        <Link to='/'>
          <button className='Back-button'>Back</button>
        </Link>
        <AirportsDetails airports={airports} setFilter={setAirportFilter} />
      </div>
    )  
  }
}

export default Airports