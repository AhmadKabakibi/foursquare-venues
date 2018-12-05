import React, { Component } from 'react'
import FoursquareVenues from '../../modules/foursquare'
import logo from './logo.svg'
import './MainPage.css'

import VenuesCollection from '../../components/VenuesCollection'
import Error from '../../components/Error'

class MainPage extends Component {
  constructor(props) {
    super(props)
    this.foursquare = new FoursquareVenues()
    this.state = {
      query: '',
      venues: [],
      noResults: false,
      radius: 500,
      showingResults: 0,
      total: 0,
      error: ''
    }
  }

  componentDidMount() {
    this.getVenues()
  }

  getVenues() {
    this.foursquare
      .getVenues(this.state.radius, this.state.query)
      .then(venues => {
        this.setState({ noResults: !venues.length })
        this.setState({
          showingResults: venues.length,
          total: venues.length,
          venues: Object.values(venues)[0]
        })
      })
      .catch(error => {
        this.setState({ error: error })
      })
  }

  render() {
    const { venues, error } = this.state
    return (
      <div className="App">
        {error && <Error error={error} />}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {venues ? <VenuesCollection venues={venues} /> : null}
      </div>
    )
  }
}

export default MainPage
