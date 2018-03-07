import airports from './Airports'

if (process.env.NODE_ENV === 'development') {
  let axios = require('axios')
  let MockAdapter = require('axios-mock-adapter')
  let mock = new MockAdapter(axios)
    
  mock.onGet(/\/country\/[a-z]/).reply((config) => {
    const parts = config.url.split("/")
    const countryCode = parts[parts.length-1]

    if (countryCode !== 'all') {
      const newAirports = Object.values(airports).filter(e => 
        e.iso === countryCode.toUpperCase()
      )

      return [200, newAirports]
    }

    return [200, airports.slice()]
  })
}