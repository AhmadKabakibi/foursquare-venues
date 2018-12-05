import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as routes from '../constants/routes'

import MainPage from './MainPage'

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path={routes.MAIN} component={MainPage} />
    </Switch>
  </Router>
)

export default App
