import React from 'react'

import './assets/scss/general.scss'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Home from './views/home'
import Audience from './views/audience'
import Trial from './views/trial'

const App = () => {
  
  return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/audience" component={Audience} />
            <Route path="/trial" component={Trial} />
          </Switch>
        </div>
      </Router>
  );
}
export default App
