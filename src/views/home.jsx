import React from 'react'

import { Link } from "react-router-dom"

import NewMission from '../components/modules/newMission'
import History from '../components/modules/history'

const Home = () => {
  
  return(
    <div class="home">
      <div class="big-gap">
        <h2 class="hello">Bonjour Lise !</h2>
        <Link to="/audience">Audience</Link>
        <NewMission></NewMission>
        <History></History>
      </div>
    </div>
  )
}

export default Home