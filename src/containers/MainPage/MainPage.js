import React, { Component } from 'react'
import FoursquareVenues from '../../modules/foursquare'
import { Alert, Form, FormGroup, Input } from 'reactstrap'
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
      radius: 2000,
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

  onKeyUp(event) {
    if (event.key === 'Enter') {
      event.target.blur()
    }
    this.setState({ query: event.target.value })
    this.getVenues()
  }

  renderVenues() {
    if (this.state.venues.length) {
      return <VenuesCollection venues={this.state.venues} />
    } else if (this.state.noResults) {
      return <Alert color="primary">No venues found nearby you.</Alert>
    } else {
      return (
        // TODO add loader animation
        <div>
          <div className="loader" />
          <div className="dot" />
        </div>
      )
    }
  }

  render() {
    const { query, total, radius, error } = this.state
    return (
      <div>
        <div className="container">
          {error && <Error error={error} />}

          <div className="text-center">
            <h1 className="display-4">Venues NearBy</h1>
            <p className="lead mb-4">Find venues near you</p>
            <Form className="mb-5" onSubmit={event => event.preventDefault()}>
              <FormGroup>
                <Input
                  type="text"
                  id="query"
                  placeholder="ex: food, ,bar , gym ..."
                  onChange={this.onKeyUp.bind(this)}
                  value={query}
                />
              </FormGroup>
              <FormGroup>
                <p className="range-field">
                  <input
                    className="custom-range"
                    type="range"
                    id="slider"
                    min="1"
                    max="5000"
                    value={radius}
                    onChange={e => this.setState({ radius: e.target.value })}
                    onMouseUp={e => this.getVenues()}
                  />
                </p>
              </FormGroup>
              <p>
                Showing <strong>{this.state.showingResults}</strong> of {total}{' '}
                venues found{' '}
                {query ? (
                  <span>
                    {' '}
                    for <strong>{query}</strong>{' '}
                  </span>
                ) : null}{' '}
                within <strong>{radius / 1000}</strong> KM.
              </p>
            </Form>
          </div>
          {this.renderVenues()}
        </div>
      </div>
    )
  }
}

export default MainPage
