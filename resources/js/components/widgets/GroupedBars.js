import React,{useState,useEffect} from 'react';
import { Bar } from 'react-chartjs-2';


const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  responsive:true,
  maintainAspectRatio : false
};

const GroupedBar = ({data}) => {
  return(
    <Bar data={data} options={options} />
)};

export default GroupedBar;