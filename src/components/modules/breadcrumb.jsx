import React from 'react'
import { useHistory } from 'react-router-dom'

import BreadcrumbElement from '../ui/breadcrumbElement'


const Breadcrumb = ({ pathRef }) => {

  let history = useHistory();

  const pathTo = () => {
    if ( pathRef === "audience" ) {
      return history.push( "/trial/trial" )
    } else if ( pathRef === "trial" ) {
      return history.push( "/stations/stations" )
    } else if ( pathRef === "stations" ) {
      return history.push( "/dataviz/dataviz" )
    }
  }

  return(
    <div className="breadcrumb">
      <BreadcrumbElement path = "audience" text = "Audience" data="audienceData" classRef='is-showed'/>
      <BreadcrumbElement path = "trial" text = "Épreuves" data="trialData" classRef={ pathRef === 'stations' ? 'is-showed' : ''}/>
      <BreadcrumbElement path = "stations"  text = "Gares" data="stationsData" />
      <input onClick={ pathTo } className="breadcrumb__button input-button" type="submit" value="CONTINUER"/>
    </div>
  )
}

export default Breadcrumb