import React from 'react'
import {Route} from 'react-router'

import Form from './Form'
import AirportsContainer from '../containers/Airports'

import './App.css'

const Routes = () => (
  <div className="App">
    <header className="App-header">
      <h3 className="App-title">Netquest Assignment App</h3>
    </header>
    <Route exact path="/" component={Form} />
    <Route path="/country/:countryCode" component={AirportsContainer} />
  </div>
)

export default Routes