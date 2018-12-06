import axios from 'axios'
import debounce from 'debounce-promise'
export default class FoursquareVenues {
  constructor() {
    this.BASE_URL = 'https://api.foursquare.com/v2/venues/search'
    this.CLIENT_ID = process.env.REACT_APP_CLIENT_ID
    this.CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET
    this.defaultRange = 250
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
    return new Promise((resolve, reject) => {
      this.getUserLocation().then(() => {
        radius = parseInt(radius, 10) || this.defaultRange
        debounce(
          axios
            .get(
              `${this.BASE_URL}?client_id=${this.CLIENT_ID}&client_secret=${
                this.CLIENT_SECRET
              }&ll=${this.userLocation}&radius=${radius}&query=${query}&limit=${
                this.limit
              }&v=${this._apiVersion()}`
            )
            .then(result => {
              resolve(result.data.response)
            })
            .catch(error => {
              reject(error.message)
            }),
          300
        )
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
