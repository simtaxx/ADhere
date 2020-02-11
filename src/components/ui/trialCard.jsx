import React from 'react'

const trialCard = ({ title, subtitle, icon },) => {
  
  return(
    <label className="input-button-container">
      <input className="input-button-trial" type="checkbox"/>
      <span className="button-trial">
        <div className="button-text">
          <p className="title-card">{title}</p>
          <p className="subtitle-card">{subtitle}</p>
        </div>
        <img className="icon-card" src={require(`../../assets/icons/sports/${icon}.png`) } alt="sport"/>
      </span>
    </label>
  )
}

export default trialCard