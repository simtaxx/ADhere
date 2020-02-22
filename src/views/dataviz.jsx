import React from 'react'
import {Doughnut, Line} from 'react-chartjs-2';
import Map from '../components/modules/map';

import Header from '../components/layouts/header'

const DataViz = ()=>{
    const data = {
        labels: [
            'Jours ',
            'Jours restant',
        ],
        datasets: [{
            data: [9, 6],
            backgroundColor: [
            'coral',
            'gray'
            ],
            hoverBackgroundColor: [
            'red',
            '#darkgray'
            ]
        }]
    };

    const data1 = {
        labels: [
            'évènements ',
            'évènements restant',
        ],
        datasets: [{
            data: [67, 346-67],
            backgroundColor: [
            'coral',
            'gray'
            ],
            hoverBackgroundColor: [
            'red',
            '#darkgray'
            ]
        }]
    };

    const data2 = {
        labels: [
            'personnes dans l\'audiance ',
            'total',
        ],
        datasets: [{
            data: [234000, 890000-234000],
            backgroundColor: [
            'coral',
            'gray'
            ],
            hoverBackgroundColor: [
            'red',
            '#darkgray'
            ]
        }]
    };

    const data3 = {
        labels: [
            'gares ',
            'gares restant',
        ],
        datasets: [{
            data: [7, 64-7],
            backgroundColor: [
            'coral',
            'gray'
            ],
            hoverBackgroundColor: [
            'red',
            '#darkgray'
            ]
        }]
    };


    
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

  var iconUrlChallenge = 'http://localhost:3000/epreuve.png';
  var iconUrlStation = 'http://localhost:3000/station.png';

    return(
        <div className="dataviz">
            <Header title="Visualisation du processus"></Header>
            <div style={{width: '100vw', height:'90vh', display:'flex', flexDirection:'row'}}>
            <div style={{width:'50vw', textAlign:'center', display:'flex', alignContent:'center', alignItems:'center', justifyContent:'center', justifyItems:'center'}}>
                <div style={{display: 'grid', gridTemplateColumns:"1fr 1fr", width: '300px', gridAutoRows:'300px', marginRight:'300px'}}>
                 <Doughnut data={data} />
                 <Doughnut data={data1} />
                 <Doughnut data={data2} />
                 <Doughnut data={data3} />
                 </div>
            </div>
             <div style={{width:'50vw'}}>
                <Map height="90vh"  eventLocationData={{dataEventLocation}} iconUrl={{iconUrlChallenge,iconUrlStation}}/>
             </div>
            </div>
        </div>
    )
}

export default DataViz