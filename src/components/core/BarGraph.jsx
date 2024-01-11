import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);
export const BarGraph = ({graphData}) => {
  // console.log(graphData);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const emmissions_2023 = months.map((month)=>{
    return (graphData[2023][month].e)
  })
  const emmissions_2022 = months.map((month)=>{
    return (graphData[2022][month].e)
  })
  const ratio_2022 =  months.map((month)=>{
    return (graphData[2022][month].ratio)
  })
  const ratio_2023 =  months.map((month)=>{
    return (graphData[2023][month].ratio)
  })
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const data = {
  labels,
  datasets: [
    {
      type: 'line' ,
      label: 'R/E-2023',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: false,
      data: [...ratio_2023],
      yAxisID: 'myScale'
    },
    {
      type: 'line' ,
      label: 'R/E-2022',
      borderColor: '#FFC400',
      borderWidth: 2,
      fill: false,
      data: [...ratio_2022],
      yAxisID: 'myScale'
    },
    {
      type: 'bar' ,
      label: 'Emmissions-2023',
      backgroundColor: 'rgb(75, 192, 192)',
      data: [...emmissions_2023],
      borderColor: 'white',
      borderWidth: 2,
      // yAxisID:'y-axis-1',
    },
    {
      type: 'bar',
      label: 'Emmissions-2022',
      backgroundColor: 'rgb(53, 162, 235)',
      data: [...emmissions_2022],
      // yAxisID:'y-axis-1',
    },
  ],
  };
  const chartOptions = {
        scales:{
            x:{
                beginAtZero:true
            },
            y:{
              type:'linear',
              position:'left',
              min:1000,
              max:9000
            },
            myScale: {
              type: 'linear',
              position: 'right',
              min:20,
              max:180,
            },
        }
      }
  return <Chart  type='bar' data={data} options={chartOptions} />;
}
