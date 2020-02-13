import React from 'react'

import { Link } from "react-router-dom";
import BreadcrumbElement from '../ui/breadcrumbElement'


const Breadcrumb = ({ pathRef }) => {
  const pathTo = (path) => {
    if ( path === "audience" ) {
      return "/trial/trial"
    } else if ( path === "trial" ) {
      return "/stations/stations"
    }
  }

  return(
    <div className="breadcrumb">
      <BreadcrumbElement path = "audience" text = "Audience" classRef='is-showed'/>
      <BreadcrumbElement path = "trial" text = "Épreuves" classRef={ pathRef === 'stations' ? 'is-showed' : ''}/>
      <BreadcrumbElement path = "stations"  text = "Gares" />
      <Link to={ pathTo(pathRef) } className="breadcrumb__button">
        <div>
          <input className="input-button" type="button" value="CONTINUER"/>
        </div>
      </Link>
    </div>
  )
}

export default Breadcrumb