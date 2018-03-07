import React from 'react'
import PropTypes from 'prop-types'

class AirportsFilter extends React.Component {
  static propTypes = {
    setFilter: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  handleFilterChange ({target}) {
    this.props.setFilter(target.value)
  }

  render() {
    return (
      <input
        type='text'
        placeholder='Airport IATA Filter'
        onChange={this.handleFilterChange}
      />
    )
  }
}

export default AirportsFilter