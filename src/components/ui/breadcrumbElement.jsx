import React from 'react'

import { Link, useParams } from 'react-router-dom'

const BreadcrumbElement = ({ path, text, classRef, data }) => {

  const pathRef = Object.values(useParams())[0]
  const countElements = ( dataPath ) => {
    if( dataPath ) {
      const dataCount = JSON.parse(localStorage.getItem(dataPath))
    }
  }

  return (
    <div className="breadcrumb__element-container">
      <Link className={ 'breadcrumb__element ' + classRef + ( path === pathRef ? ' breadcrumb__element--is-active' : '') } to={ `/${ path }/${ path }` }>
        <div className="breadcrumb__elements-count-container">
          <p className="breadcrumb__elements-count"></p>
        </div>
        <p>{ text }</p>
      </Link>
    </div>
  )
}

export default BreadcrumbElement