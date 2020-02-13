import React from 'react'
import {Doughnut, Line} from 'react-chartjs-2';

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


    return(
        <div className="dataviz">
            <Header title="Visualisation du processus"></Header>
            <div className="small-gap">
             <div style={{display: 'grid', gridTemplateColumns:"1fr 1fr", width: '300px', gridAutoRows:'300px'}}>
                 <Doughnut data={data} />
                 <Doughnut data={data1} />
                 <Doughnut data={data2} />
                 <Doughnut data={data3} />
             </div>
            </div>
        </div>
    )
}

export default DataViz