import React from 'react'

import { Link } from 'react-router-dom'

const breadcrumbElement = (props) => {
  const showElement = () => {
    
  }
  return (
    <Link className={ 'breadcrumb__element ' + ( props.isActive === 'audience' ? 'breadcrumb__element--is-active' : '') } to="/audience">
      <p>Audience</p>
    </Link>
  )
}

export default breadcrumbElement