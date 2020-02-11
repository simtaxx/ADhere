import React from 'react'

import { Link } from "react-router-dom";


const Breadcrumb = (props) => {
  console.log(props.isActive)

  return(
    <div class="breadcrumb">
      <Link className={ 'breadcrumb__element ' + (props.isActive === 'audience' ? 'breadcrumb__element--is-active' : '') } to="/audience">
        <p>Audience</p>
      </Link>
      <Link className={ 'breadcrumb__element ' + (props.isActive === 'trial' ? 'breadcrumb__element--is-active' : 'breadcrumb__element--is-hidden') } to="/trial">
        <p>Épreuves</p>
      </Link>
      <Link className={ 'breadcrumb__element ' + (props.isActive === 'station' ? 'breadcrumb__element--is-active' : 'breadcrumb__element--is-hidden') } to="/station">
        <p>Gares</p>
      </Link>
      <div href="/#" class="breadcrumb__element breadcrumb__button">
        <input class="input-button" type="button" value="CONTINUER"/>
      </div>
    </div>
  )
}

export default Breadcrumb