import React from 'react'

const Save = ( data, category ) => {

  const saveLS = (e) => {
    localStorage.setItem(category, JSON.stringify(data))
    console.log(JSON.parse(localStorage.getItem(category)))
    e.preventDefault()
  }

  return (
    <input onClick={ saveLS } className="input-button" type="submit" value="SAUVEGARDER"/>
  )
}

export default Save