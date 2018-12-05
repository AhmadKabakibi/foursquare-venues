## Foursquare Venues

[![Build Status](https://travis-ci.org/AhmadKabakibi/foursquare-venues.svg?branch=master)](https://travis-ci.org/AhmadKabakibi/foursquare-venues)

list of available venues based on the user location

### Online Demo

Foursquare Venues [demo](https://ahmadkabakibi.github.io/foursquare-venues)

### Getting Started

You'll need to add your own `Client ID` `Client Secret` to the .env to allow auth with foursquare API.

`npm run start` Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Scripts

- `npm run start`: Start development server with hot reloading. It runs on `localhost:3000`
- `npm run build`: Build a Production version
- `npm run test`: Run all unit tests
- `npm run test:coverage`: Create a coverage report for the code and determine whether the coverage is high enough
- `npm run eject`: Eject your app from the defaults. This is a one-way decision.
- `npm run predeploy`: Build a Production version before deployment.
- `npm run deploy`: Deploy Production version of the application.

### `Deploy to Production`

- `npm run predeploy`
- `npm run deploy`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.<br>

## API Refernce

Foursquare authentication [Authentication](https://developer.foursquare.com/docs/api/configuration/authentication).

Returns a list of recommended venues near the current location [Get Venue Recommendations](https://developer.foursquare.com/docs/api/venues/explore).
