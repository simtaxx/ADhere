import React from 'react'

import '../assets/scss/views/home.scss'

import { BrowserRouter as Router, Link } from "react-router-dom"

import NewMission from '../components/modules/newMission'
import History from '../components/modules/history'

export default function Home() {
  
  return(
    <div class="home big-gap">
      <h2 class="hello">Bonjour Lise !</h2>
      <Router>
        <Link to="/audience">Audience</Link>
      </Router>
      <NewMission></NewMission>
      <History></History>
    </div>
  )
}