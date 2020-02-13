import React from 'react'

import { Link } from "react-router-dom";
import BreadcrumbElement from '../ui/breadcrumbElement'


const Breadcrumb = (props) => {

  return(
    <div className="breadcrumb">
      <BreadcrumbElement isActive={ props.isActive }></BreadcrumbElement>
      <Link to="/trial" className="breadcrumb__element breadcrumb__button">
        <div>
          <input className="input-button" type="button" value="CONTINUER"/>
        </div>
      </Link>
    </div>
  )
}

export default Breadcrumb