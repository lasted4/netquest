import {createSelector} from 'reselect'

export const itemsSelector = state => state.airports.items

export const filterSelector = state => state.airports.filter

export const filteredAirportsSelector = createSelector(
  itemsSelector, filterSelector,
  (airports, filter) => {
    if (filter) {
      const filteredAirportsArray = Object.values(airports).filter(
        a => a.iata.toLowerCase().indexOf(filter.toLowerCase()) > -1
    )

      return filteredAirportsArray
    }
    const airportsArray = Object.keys(airports).map(iata => airports[iata])

    return airportsArray
  }
)