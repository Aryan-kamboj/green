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
export const BarGraph = () => {
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data = {
  labels,
  datasets: [
    {
      type: 'line' ,
      label: 'Dataset 1',
      borderColor: 'rgb(255, 99, 132)',
      borderWidth: 2,
      fill: false,
      data: [10,20,30,40,50],
    },
    {
      type: 'bar' ,
      label: 'Dataset 2',
      backgroundColor: 'rgb(75, 192, 192)',
      data: [10,20,30,40,50],
      borderColor: 'white',
      borderWidth: 2,
    },
    {
      type: 'bar',
      label: 'Dataset 3',
      backgroundColor: 'rgb(53, 162, 235)',
      data: [10,20,30,40,50],
    },
  ],
  };
  const chartOptions = {
        scales:{
            x:{
                beginAtZero:true
            },
            y:{
                beginAtZero:true,
                position:'left',
            },
            y1:{
                min:0,
                max:100,
                position:"right"
            }
        }
      }
  return <Chart  type='bar' data={data} options={chartOptions} />;
}

    


// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       type:"bar",
//       data: [10,20,30,40],
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//     {
//       label: 'Dataset 2',
//       type:"bar",
//       data: [20,30,40,60],
//       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//     },
//     {
//       label:"Line Dataset",
//       type:"line",
//       borderColor:"rgba(54, 162, 235, 1)",
//       borderWidth:2,
//       fill:false,
//       data:[3,4,5],
//       yAxisID:"y1"
//     }
//   ],
// };
//     return <Chart type="bar" data={data} />;
// };
