import React from "react";
import Map from "./map";
import "./styles.css";

export default function App() {

  var dataEventLocation = [
    {
      name: "Gare de Lyon",
      location: [48.8443038, 2.3743773],
      stations: 0
    },
    {
      name: "Chatelet les Halles",
      location: [48.8620543, 2.3449645],
      stations: 0
    },
    {
      name: "Nation ",
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
  ]; 

  var iconUrlChallenge = './epreuve.png';
  var iconUrlStation = './station.png';

  return (
    <>
      <Map height="90vh"  eventLocationData={{dataEventLocation}} iconUrl={{iconUrlChallenge,iconUrlStation}}/>
    </>
  );
}
