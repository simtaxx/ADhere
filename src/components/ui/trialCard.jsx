import React from 'react'

const TrialCard = ({ name, pourcentage, icon , checked ,setNewValue}) => {

  return(
    <label onChange={setNewValue} className="input-button-container">
      <input className="input-button-trial" checked={checked ? true : false} type="checkbox"/>
      <span className={ checked ? "button-trial is-active" : "button-trial" }>
        <div className="button-text">
          <p className="title-card">{name}</p>
          <p className="subtitle-card">{ pourcentage } % de correspondance</p>
        </div>
        <img className="icon-card" src={require(`../../assets/icons/sports/${icon}.png`) } alt="sport"/>
      </span>
    </label>
  )
}

export default TrialCard