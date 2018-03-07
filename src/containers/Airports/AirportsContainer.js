import {connect} from 'react-redux'

import {loadAirports, setAirportFilter} from '../../reducers/airports'
import {filteredAirportsSelector} from '../../reducers/selectors'

import Airports from '../../components/Airports'

const mapStateToProps = state => ({
  airports: filteredAirportsSelector(state)
})

const mapDispatchToProps = {
  loadAirports,
  setAirportFilter
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Airports)