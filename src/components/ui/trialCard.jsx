import React from 'react'

const trialCard = (props) => {
  
  return(
    <label className="input-button-container">
      <input className="input-button-trial" type="checkbox"/>
      <span className="button-trial">
        <div className="button-text">
          <p className="title-card">{props.title}</p>
          <p className="subtitle-card">{props.subtitle}</p>
        </div>
        <img src={props.icon} alt="sport"/>
      </span>
    </label>
  )
}

export default trialCard