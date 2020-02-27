import React, { useState, useEffect } from 'react'


import Header from '../components/layouts/header'
import Breadcrumb from '../components/modules/breadcrumb'
import StationsCard from '../components/ui/stationsCard'
import AxiosGet from '../components/mixins/axios'

import Map from '../components/modules/map/map'

const Stations = () => {
  
  const [ dataLocal, setDataLocal ] = useState(null)
  const getEvents = async () => {
    const response = await AxiosGet( 'http://127.0.0.1:8000/events' )
    localStorage.setItem("eventsData",  JSON.stringify(response.data))
  }
  if (!dataLocal) {
    getEvents()
    setDataLocal(JSON.parse(localStorage.getItem("eventsData")))
  }


  return(
    <div className="audience">
      <Header title="Gares"></Header>
      <div className="small-gap">
        <div className="semi-container">
          <h2>Localisation des épreuves et séléction des gares</h2>
          <h3>Sélectionnez les événement qui vous conviennent</h3>
          <p className="description">Vous pourrez après choisir les gares a proximité où vous pourrez afficher votre  publicité </p>
          <StationsCard></StationsCard>
        </div>
        <div className="semi-container">
          <Map height= "500px" eventLocationData={ dataLocal } iconUrl=""></Map>
          <Breadcrumb pathRef="stations" />
        </div>
      </div>
    </div>
  )
}

export default Stations