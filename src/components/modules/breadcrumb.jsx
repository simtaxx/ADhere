import React from 'react'

import { Link } from "react-router-dom";
import BreadcrumbElement from '../ui/breadcrumbElement'


const Breadcrumb = (props) => {

  return(
    <div class="breadcrumb">
      <BreadcrumbElement isActive={ props.isActive }></BreadcrumbElement>
      <Link to="/trial" class="breadcrumb__element breadcrumb__button">
        <div>
          <input class="input-button" type="button" value="CONTINUER"/>
        </div>
      </Link>
    </div>
  )
}

export default Breadcrumb