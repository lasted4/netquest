import React from 'react'
import {Router} from 'react-router'

import createBrowserHistory from '../history'
import Routes from './Routes'

const App = () => (
  <Router history={createBrowserHistory}>
    <Routes />
  </Router>
)

export default App