import React from 'react'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from '../../views/home'
import Audience from '../../views/audience'

export default function Routes() {
  return(
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/audience">
          <Audience />
        </Route>
      </Switch>
    </Router>
  )
}