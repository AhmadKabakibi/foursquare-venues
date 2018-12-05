import FoursquareVenues from './foursquare'

const mockGeolocation = {
  getCurrentPosition: jest.fn((success, failure, options) => {
    success({
      coords: {
        longitude: 60,
        latitude: 60
      }
    })
  })
}

describe('Modules:FoursquareVenues', () => {
  const foursquare = new FoursquareVenues()
  it('should get current user Geolocation', () => {
    global.navigator.geolocation = mockGeolocation
    return foursquare
      .getUserLocation()
      .then(response => expect(response).toBe('60,60'))
  })

  describe('Foursquare nearby Venues based on the user Geolocation', async () => {})
})
