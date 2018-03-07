import React from 'react'
import PropTypes from 'prop-types'

const AirportsTable = ({airports}) => (
  <table className='Table'>
    <thead>
      <tr>
        <th>Continent</th>
        <th>ISO</th>
        <th>IATA</th>
        <th>Name</th>
        <th>Size</th>
        <th>Type</th>
      </tr>
    </thead>
    <tbody>
      {airports.map((a, i) =>
        <tr key={i}>
          <td>{a.continent}</td>
          <td>{a.iso}</td>
          <td>{a.iata}</td>
          <td>{a.name}</td>
          <td>{a.size}</td>
          <td>{a.type}</td>
        </tr>
      )}
    </tbody>
  </table>
)

AirportsTable.propTypes = {
  airports: PropTypes.array.isRequired
}
  
export default AirportsTable