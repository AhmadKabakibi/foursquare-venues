import React, { Component } from 'react'
import FoursquareVenues from '../../modules/foursquare'
import logo from './logo.svg'
import './MainPage.css'

class MainPage extends Component {
  constructor(props) {
    super(props)
    this.foursquare = new FoursquareVenues()
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    )
  }
}

export default MainPage
