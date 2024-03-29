import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ products }) => {
  const productLabels = products.map(item => item.title);

  const productSaleCounts = products.map(item => item.sold);

  const data = {
    labels: productLabels,
    datasets: [
      {
        label: `Total Sold `,
        data: productSaleCounts,
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

    
      return (
        <div className='child-container'>
            <h1 className="main-title">Product Sales</h1>
            <div className='child-container'>
              <Pie data={data} />
            </div>
        </div>
    )
}

export default PieChart;