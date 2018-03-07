import React from 'react'
import {Redirect} from 'react-router'

import './Form.css'

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      countryCode: 'all',
      shallRedirect: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (event) => {
    this.setState({
      countryCode: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
  
    this.setState({
      shallRedirect: true 
    })
  }

  render () {
    const {countryCode, shallRedirect} = this.state

    if (shallRedirect) {
      return (
        <Redirect to={'/country/' + countryCode} />
      )
    }

    return (
      <form className='Form' onSubmit={this.handleSubmit}>
        <div>
          <input
            type='text'
            placeholder='ISO'
            className='Form-input'
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button className='Form-button' onClick={this.handleSubmit}>
            Search Airports
          </button>
        </div>
      </form>
    )
  }
}

export default Form