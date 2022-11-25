// ####### IMPORTING LIBRARIES ########

import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// ######### CHART.JS Register #############
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function GraphDisplay({
  datapoints, 
  title, 
  color, 
  border,
  labels
}) {
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      // title: {
      //   display: true,
      //   text: title,
      // },
    },
  };
  
  const data = {
    labels,
    datasets: [
      {
        label: title,
        data: datapoints,
        borderColor: border,
        backgroundColor: color,
      }
    ],
  };

  return (
    <div>
        <Line 
          options={options} 
          data={data} 
        />
    </div>
  )
}
