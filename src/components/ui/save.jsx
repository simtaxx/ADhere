import React from 'react'

const Save = ( data ) => {
  

  const saveLS = (e) => {
    e.preventDefault()
    localStorage.setItem(data.category, JSON.stringify(data.data))
  }

  return (
    <input onClick={ saveLS } className="input-button" type="submit" value="SAUVEGARDER"/>
  )
}

export default Save