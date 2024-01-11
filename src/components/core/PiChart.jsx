import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
export const PiChart = ({totalEm}) => {
    const suppliers = Object.keys(totalEm);
    const dataset = suppliers.map((supplier)=>{
        return totalEm[supplier];
    })
    console.log(dataset);
const data = {
  labels: [...suppliers],
  datasets: [
    {
      label: 'CO₂e',
      data: [...dataset],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
        'rgba(93, 94, 91,0.5)',
        'rgba(209, 0, 108, 0.5)',
        'rgba(209, 255, 108, 0.5)',
        'rgba(255, 0, 19, 0.5)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgb(93, 94, 91)',
        'rgba(209, 0, 108, 1)',
        'rgba(209, 255, 108, 1)',
        'rgba(255, 0, 19, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

return (<div>
        <Doughnut className=' max-w-[20rem] max-h-[28rem]' data={data}  />
        </div>
    );
}