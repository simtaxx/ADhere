import React from 'react'

import { BrowserRouter as Router, Route } from "react-router-dom"

import Home from '../../views/home'
import Audience from '../../views/audience'
import Trial from '../../views/trial'

const Routes =  () => {
  return(
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/audience" component={Audience} />
      <Route path="/trial" component={Trial} />
    </Router>
  )
}

export default Routes