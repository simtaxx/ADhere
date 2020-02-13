import React from 'react'

import { Link } from 'react-router-dom'

const breadcrumbElement = (props) => {

  return (
    <div className="breadcrumb__element-container">
      <Link className={ 'breadcrumb__element ' + ( props.isActive === 'audience' || 'trial' || 'station' ? 'breadcrumb__element--is-active' : '') } to="/audience">
        <p>Audience</p>
      </Link>
      <Link className={ 'breadcrumb__element ' + ( props.isActive === 'trial' ? 'breadcrumb__element--is-active' : '') } to="/trial">
        <p>Épreuves</p>
      </Link>
      <Link className={ 'breadcrumb__element ' + ( props.isActive === 'station' ? 'breadcrumb__element--is-active' : '') } to="/stations">
        <p>Stations</p>
      </Link>
    </div>
  )
}

export default breadcrumbElement