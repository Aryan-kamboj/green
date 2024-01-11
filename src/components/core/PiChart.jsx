import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
// import { Doughnut } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// ChartJS.register(ArcElement, Tooltip, Legend);

export const PiChart = () => {
    // const data = {
    //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //     datasets: [
    //       {
    //         label: 'Bar Dataset',
    //         type:'Bar',
    //         data: [12, 19, 3, 5, 2, 3],
    //         backgroundColor: [
    //           'rgba(255, 99, 132, 0.2)',
    //           'rgba(54, 162, 235, 0.2)',
    //           'rgba(255, 206, 86, 0.2)',
    //           'rgba(75, 192, 192, 0.2)',
    //           'rgba(153, 102, 255, 0.2)',
    //           'rgba(255, 159, 64, 0.2)',
    //         ],
    //         borderColor: [
    //           'rgba(255, 99, 132, 1)',
    //           'rgba(54, 162, 235, 1)',
    //           'rgba(255, 206, 86, 1)',
    //           'rgba(75, 192, 192, 1)',
    //           'rgba(153, 102, 255, 1)',
    //           'rgba(255, 159, 64, 1)',
    //         ],
    //         borderWidth: 1,
    //         // yAxisID:'y',
    //       },
    //     ],
    //   };
    //   const chartOptions = {
    //     scales:{
    //         x:{
    //             beginAtZero:true
    //         },
    //         y:{
    //             beginAtZero:true,
    //             position:'left',
    //         },
    //         y1:{
    //             beginAtZero:true,
    //             position:"right"
    //         }
    //     }
    //   }

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

return (<div>
        {/* {console.log(chartOptions)} */}
        <Doughnut className=' max-w-[20rem] max-h-[20rem]' data={data}  />
        </div>
    );
}