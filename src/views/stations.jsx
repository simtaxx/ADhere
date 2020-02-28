import React, { useState, useEffect } from 'react'


import Header from '../components/layouts/header'
import Breadcrumb from '../components/modules/breadcrumb'
import StationsCard from '../components/ui/stationsCard'
import AxiosGet from '../components/mixins/axios'

import Map from '../components/modules/map/map2'

const Stations = () => {
  
  const [ eventsData, setEventsData ] = useState( [] )
  const [ currentSelect, setCurrentSelect ] = useState( null )
  const [ select, setSelect ] = useState( false )
  console.log(select)
  const getEvents = async () => {
    const response = await AxiosGet( 'http://127.0.0.1:8000/events' )
    localStorage.setItem("eventsData",  JSON.stringify(response.data))
    setEventsData(response.data)
  }

  useEffect(()=> {
    getEvents()
  },[])



  return(
    <div className="audience">
      <Header title="Gares"></Header>
      <div className="small-gap">
        <div className="semi-container">
          <h2>Localisation des épreuves et séléction des gares</h2>
          <h3>Sélectionnez les événement qui vous conviennent</h3>
          <p className="description">Vous pourrez après choisir les gares a proximité où vous pourrez afficher votre  publicité </p>
          {/* {eventsData.map(()=> {
            return <StationsCard eventsData={eventsData}></StationsCard>
          })} */}
        </div>
        <div className="semi-container">
          <Map eventsData={eventsData} setIsSelected={ setSelect } height= "500px" ></Map>
          <Breadcrumb pathRef="stations" />
        </div>
      </div>
    </div>
  )
}

export default Stations