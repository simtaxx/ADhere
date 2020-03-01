import React from "react"
/* import Donut from '../components/modules/chart/donutChart' */
import GanttChart from "../components/modules/chart/ganttChart"
import EstimationChart from "../components/modules/chart/estimationChart"
import Map from "../components/modules/map"
import CardLeft from "../assets/data/cercle.svg"

import Header from "../components/layouts/header"

const Recap = () => {
  /*  let data = [
    { name: "Jours séléctionée", value: "4", colors: "coral" },
    { name: "Jours restant", value: "6", colors: "white" }
  ] */

  let data1 = [
    { date: "07/25/2024", value: 10000 },
    { date: "07/25/2024", value: 11000 },
    { date: "07/30/2024", value: 12000 },
    { date: "07/31/2024", value: 13000 },
    { date: "08/02/2024", value: 14000 },
    { date: "08/09/2024", value: 15000 },
    { date: "07/26/2024", value: 16000 },
    { date: "08/03/2024", value: 17000 },
    { date: "08/04/2024", value: 18000 },
    { date: "07/30/2024", value: 19000 },
    { date: "07/29/2024", value: 20000 },
    { date: "08/02/2024", value: 21000 },
    { date: "08/02/2024", value: 22000 },
    { date: "07/28/2024", value: 23000 },
    { date: "07/25/2024", value: 24000 },
    { date: "08/04/2024", value: 25000 },
    { date: "08/08/2024", value: 26000 },
    { date: "07/25/2024", value: 27000 },
    { date: "07/27/2024", value: 28000 },
    { date: "07/30/2024", value: 29000 },
    { date: "08/01/2024", value: 30000 },
    { date: "08/01/2024", value: 31000 },
    { date: "07/24/2024", value: 32000 },
    { date: "08/08/2024", value: 33000 },
    { date: "07/28/2024", value: 34000 },
    { date: "07/27/2024", value: 35000 },
    { date: "07/25/2024", value: 36000 },
    { date: "07/28/2024", value: 37000 },
    { date: "07/30/2024", value: 38000 },
    { date: "07/28/2024", value: 39000 },
    { date: "07/29/2024", value: 40000 },
    { date: "08/03/2024", value: 41000 },
    { date: "07/28/2024", value: 42000 },
    { date: "08/02/2024", value: 43000 },
    { date: "07/25/2024", value: 44000 },
    { date: "07/26/2024", value: 45000 },
    { date: "07/30/2024", value: 46000 },
    { date: "07/28/2024", value: 47000 },
    { date: "07/30/2024", value: 48000 },
    { date: "08/05/2024", value: 49000 },
    { date: "07/28/2024", value: 50000 },
    { date: "07/23/2024", value: 51000 },
    { date: "08/01/2024", value: 52000 },
    { date: "07/26/2024", value: 53000 },
    { date: "08/06/2024", value: 54000 },
    { date: "07/26/2024", value: 55000 },
    { date: "08/07/2024", value: 56000 },
    { date: "07/31/2024", value: 57000 },
    { date: "08/08/2024", value: 58000 }
  ]

  let data2 = [
    {
      dateA: "07/25/2024",
      dateB: "07/30/2024",
      federation: "athletisme",
      icon: "athletisme"
    },
    {
      dateA: "07/29/2024",
      dateB: "08/03/2024",
      federation: "handball",
      icon: "handball"
    },
    {
      dateA: "08/05/2024",
      dateB: "08/09/2024",
      federation: "football",
      icon: "football"
    }
  ]
  let dataEventLocation = [
    {
      name: "Football",
      icon: "football",
      location: [48.8443038, 2.3743773],
      stations: 0
    },
    {
      name: "Athletisme",
      icon: "athletisme",
      location: [48.8620543, 2.3449645],
      stations: 0
    },
    {
      name: "Handball",
      icon: "handball",
      location: [48.8483634, 2.393789],
      stations: [
        {
          name: "rue des boulet",
          location: [48.8522705, 2.3872059]
        },
        {
          name: "picpus",
          location: [48.8449438, 2.3990587]
        }
      ]
    }
  ]

  let iconUrlStation = "http://localhost:3000/station.png"
  return (
    <div className="dataviz">
      <Header title="Visualisation du processus"></Header>
      <div
        style={{ display: "flex", flexDirection: "row" }}
        className="small-gap"
      >
        <div
          style={{
            width: "50vw",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            justifyItems: "center",
            flexDirection: "column"
          }}
        >
          <h2>Récapitulatif de votre campagne</h2>
          <h3>Votre mission en quelques chiffres </h3>
          <img style={{ width: "100%" }} src={CardLeft} alt="" />
          <h3>Estimation de l'audience chaque jour</h3>
          <EstimationChart data={data1} height="400px" width="100%" />
          <h3>Répartition des épreuves que vous avez sélectionnées</h3>
          <GanttChart data={data2} height="400px" width="100%" />
        </div>
        <div style={{ width: "45vw", position: "fixed", right: "20px" }}>
          <Map
            height="600px"
            eventLocationData={{ dataEventLocation }}
            iconUrl={{ iconUrlStation }}
          />
        </div>
      </div>
    </div>
  )
}

export default Recap
