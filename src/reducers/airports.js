import '../server/api/Axios'

export const LOAD_AIRPORTS = 'LOAD_AIRPORTS'
export const LOAD_AIRPORTS_SUCCESS = 'LOAD_AIRPORTS_SUCCESS'

export const SET_AIRPORT_FILTER = 'SET_AIRPORT_FILTER'

export const loadAirports = countryCode => {
  return {
    type: LOAD_AIRPORTS,
    payload: {
      request: {
        method: 'get',
        url: `/country/${countryCode}`
      }
    }
  }
}

export const setAirportFilter = filter => ({
  type: SET_AIRPORT_FILTER,
  filter
})

const loadAirportsHandler = (state, {payload}) => {
  const newState = {
    ...state,
    items: {}
  }

  // eslint-disable-next-line
  payload.data.map((a, i) => {
    newState.items[a.iata] = {
      ...a,
      index: i
    }
  })

  return newState
}

const setAirportFilterHandler = (state, {filter}) => {
  const newState = {
    ...state,
    filter: filter
  }

  return newState
}

const ACTION_HANDLERS = {
  [LOAD_AIRPORTS_SUCCESS]: loadAirportsHandler,
  [SET_AIRPORT_FILTER]: setAirportFilterHandler
}

const initialState = {
  items: {},
  filter: ''
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}