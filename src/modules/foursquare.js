import axios from 'axios'

export default class FoursquareVenues {
  constructor() {
    this.BASE_URL = 'https://api.foursquare.com/v2/venues/search'
    this.CLIENT_ID = process.env.REACT_APP_CLIENT_ID
    this.CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET
    this.defaultRange = 25
    this.limit = 50
    this.userLocation = window.sessionStorage
      ? window.sessionStorage.getItem('userLocation')
      : null
  }
  getUserLocation() {
    return new Promise((resolve, reject) => {
      if (this.userLocation) {
        resolve(this.userLocation)
      }
      const onGeoSuccess = location => {
        this.userLocation = `${location.coords.latitude},${
          location.coords.longitude
        }`
        window.sessionStorage.setItem('userLocation', this.userLocation)
        resolve(this.userLocation)
      }
      const onGeoError = error => {
        reject(error)
      }
      navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError)
    })
  }

  getVenues(radius, query) {
    radius = parseInt(radius, 10) || this.defaultRange
    const url = `${this.BASE_URL}?client_id=${this.CLIENT_ID}&client_secret=${
      this.CLIENT_SECRET
    }&ll=${this.userLocation}&radius=${radius}&query=${query}&limit=${
      this.limit
    }&v=${this._apiVersion()}`

    return new Promise((resolve, reject) => {
      this.getUserLocation().then(() => {
        axios
          .get(url)
          .then(response => {
            resolve(response)
          })
          .catch(error => reject(error))
      })
    })
  }

  _apiVersion() {
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()

    return String(10000 * year + 100 * month + day)
  }
}
