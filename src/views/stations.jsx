import React, { useState, useEffect } from 'react'
import Header from '../components/layouts/header'
import Breadcrumb from '../components/modules/breadcrumb'
import StationsCard from '../components/ui/stationsCard'
import AxiosGet from '../components/mixins/axios'
import trialCard from '../assets/data/federation_list'
import CardLeft from '../assets/data/cards.svg'

import Map from '../components/modules/map/map2'

const Stations = () => {
  
  const [ eventsData, setEventsData ] = useState( [] )
  const [ currentSelect, setCurrentSelect ] = useState( null )
  const [ select, setSelect ] = useState( false )
  const getEvents = async () => {
    const response = await AxiosGet( 'http://127.0.0.1:8000/events' )
    localStorage.setItem("eventsData",  JSON.stringify(response.data))
    console.log(trialCard)
    let resClean = response.data.map((event) => {
      console.log(Object.values(trialCard))
      return Object.assign(event, Object.values(trialCard).find(({icon, id}) => [event.id_federation === id]))
    })
    
    setEventsData(response.data)
  }

  console.log(eventsData)

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
          <img src={ CardLeft } alt=""/>
        </div>
        <div className="semi-container" style={{ position: 'fixed', right: '20px' }}>
          <Map eventsData={eventsData} setIsSelected={ setSelect } height= "500px" ></Map>
          <Breadcrumb pathRef="stations" />
        </div>
      </div>
    </div>
  )
}

export default Stations