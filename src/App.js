import React from "react"

import "./assets/scss/general.scss"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Home from "./views/home"
import Audience from "./views/audience"
import Trial from "./views/trial"
import Stations from "./views/stations"
import Recap from "./views/recap"

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/audience/:audience" component={Audience} />
          <Route path="/trial/:trial" component={Trial} />
          <Route path="/stations/:stations" component={Stations} />
          <Route path="/recap/:recap" component={Recap} />
        </Switch>
      </div>
    </Router>
  )
}
export default App
