import React from "react";
import "./styles.css";
import EstimationChart from "./estimation-chart";

var data = [
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
];

export default function App() {
  return (
    <div className="App">
      <h1>Estimation de l'audience chaque jours</h1>
      <EstimationChart data={data} height="400px" width="600px" />
    </div>
  );
}
