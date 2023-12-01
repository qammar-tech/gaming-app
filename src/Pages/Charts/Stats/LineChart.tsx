import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// Function to generate random data
const generateRandomData = (length:number) => {
  return Array.from({ length }, () => Math.floor(Math.random() * 1000));
};

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: generateRandomData(labels.length),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: generateRandomData(labels.length),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const selectOptions = [
  { value: 'bar', label: 'Game Stats' },
  { value: 'reports', label: 'Reports' },
  // Add more options as needed
];

const BarChart = () => {
  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
};

export default BarChart;
