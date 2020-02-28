import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import icone from '../../../assets/icons/left-arrow.png'


require('dotenv').config()

const MAPBOX_TOKEN = 'pk.eyJ1IjoiY2hlaWsiLCJhIjoiY2s2a3pzMDE2MDk0azNucGF3cHI1bjhsZiJ9.O5OgNMJeOXTZTVfv7kAuwA'

const MapBox = ({ eventsData }) => {
  const [viewport, setViewport] = useState({
    width: 609,
    latitude: 48.8534,
    longitude: 2.3488,
    zoom: 10.9,
    captureScroll: true,
    events: []
  })
  
  const SetMarkers = () => {
    return (
      eventsData.map(({Lat, Lng, Geo_name}, i)=>{
      return <Marker key={`KEY$__${i}`} latitude={Number(Lat)} longitude={Number(Lng)} >
        <img src={ require(`../../../assets/icons/sports/map/${eventsData[0].icon}.png`) } alt=""/>
        </Marker>
      })
      )
    }


    return (
      <ReactMapGL {...viewport} style={{ width: '100%', minHeight: '30vw', flexGrow: 2, paddingTop: '80px' }} onViewportChange={viewport => { setViewport(viewport) }} mapboxApiAccessToken={MAPBOX_TOKEN}>
      <SetMarkers />
      </ReactMapGL>
      )
    }
    
    export default MapBox
    