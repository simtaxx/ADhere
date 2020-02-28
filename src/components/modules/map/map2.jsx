import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker , Popup} from 'react-map-gl'

require('dotenv').config()

const MAPBOX_TOKEN = 'pk.eyJ1IjoiY2hlaWsiLCJhIjoiY2s2a3pzMDE2MDk0azNucGF3cHI1bjhsZiJ9.O5OgNMJeOXTZTVfv7kAuwA'

const MapBox = ({ eventsData }) => {
  const [ latitude, setLatitude] = useState(48.8534) 
  const [ longitude, setLongitude] = useState(2.3488) 
  const [ zoom, setZoom] = useState( 10.9)


  const [viewport, setViewport] = useState({
    width: 609,
    captureScroll: true,
    events: [],
    doubleClickZoom: true,
  })
  
  const SetMarkers = () => {
    return (
      eventsData.map(({Lat, Lng, Geo_name, icon}, i)=>{
      return <Marker onClick={()=>{ console.log('ok') }} captureClick={console.log(' ok')} key={`KEY$__${i}`} latitude={Number(Lat)} longitude={Number(Lng)} >
        <img style={{width: '30px', cursor: 'pointer'}} src={ require(`../../../assets/icons/sports/map/${icon}.png`)} alt=""/>
        </Marker>
      })
      )
    }


    return (
      <ReactMapGL zoom={zoom} onClick={()=>{console.log(' ok')}}  longitude={longitude} latitude={latitude} {...viewport} style={{ width: '100%', minHeight: '30vw', flexGrow: 2, paddingTop: '80px' }} ViewportChange={(viewport) => setViewport({viewport})} mapboxApiAccessToken={MAPBOX_TOKEN}>
      <SetMarkers />
      </ReactMapGL>
      )
    }
    
    export default MapBox
    