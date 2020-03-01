import React from "react"

const StationsCard = ({
  isSelected,
  setIsSelected,
  fede,
  dateBegin,
  location,
  focusedAudience,
  totalAudience,
  stations,
  countStation
}) => {
  return (
    <div
      className={
        !isSelected ? "stations-card" : "station-card station-card__none"
      }
    >
      <div className="stations-card__title-container">
        <div className="stations-card__icon"></div>
        <h4 className="stations-card__title">
          {fede} | du 28/07/24 au 4/08/24 | Stade Roland-Garros
        </h4>
      </div>
      <div className="stations-card__stats-container">
        <div className="stations-card__stat">
          <p className="stations-card__stat-text">Audience ciblé</p>
          <p className="stations-card__stat-numbers">18 300</p>
        </div>
        <div className="stations-card__stat">
          <p className="stations-card__stat-text">AUDIENCE TOTALE</p>
          <p className="stations-card__stat-numbers">70 000</p>
        </div>
        <div className="stations-card__stat">
          <p className="stations-card__stat-text">Stations aux alentours</p>
          <p className="stations-card__stat-numbers">3 stations</p>
        </div>
        <div className="stations-card__stat">
          <p className="stations-card__stat-text">Stations Séléctionnées</p>
          <p className="stations-card__stat-numbers">0 station</p>
        </div>
      </div>
    </div>
  )
}

export default StationsCard
