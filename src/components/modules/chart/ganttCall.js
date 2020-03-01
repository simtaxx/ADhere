import React from "react"
import GanttChart from "./gantt-chart"
import "./styles.css"

let data = [
  { dateA: "07/25/2024", dateB: "07/30/2024", federation: "athletisme" },
  { dateA: "07/29/2024", dateB: "08/03/2024", federation: "handball" },
  { dateA: "08/05/2024", dateB: "08/09/2024", federation: "football" }
]

export default function App() {
  return (
    <div className="App">
      <h1>Estimation de l'audience chaque jours</h1>
      <GanttChart data={data} height="400px" width="600px" />
    </div>
  )
}
