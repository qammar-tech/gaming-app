import { Bubble } from 'react-chartjs-2';
import { Chart, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';

// Register additional elements with Chart.js
Chart.register(LinearScale, PointElement, Tooltip, Legend);

// Custom plugin for setting background color
const customCanvasBackgroundColorPlugin = {
  id: 'customCanvasBackgroundColor',
  beforeDraw: (chart: any, args: any, options: any) => {
    const { ctx } = chart;
    const { width, height } = chart.canvas;
    const radius = 15; // Set the desired border radius here

    // Create a shadow effect
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'; // Set the shadow color
    ctx.shadowBlur = 10; // Set the shadow blur radius
    ctx.shadowOffsetX = 4; // Set the horizontal shadow offset
    ctx.shadowOffsetY = 4; // Set the vertical shadow offset

    // Draw the rounded rectangle with shadow
    ctx.beginPath();
    ctx.roundRect(0, 0, width, height, radius);
    ctx.fill();

    // Reset the shadow properties
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;

    // Fill the background color
    ctx.fillStyle = options.color || 'rgba(31, 7, 87, 0.9)'; // Set your desired background color here
    ctx.beginPath();
    ctx.roundRect(0, 0, width, height, radius);
    ctx.fill();
  },
};
// Register the custom plugin with Chart.js
Chart.register(customCanvasBackgroundColorPlugin);

// Function to generate a random number within a specified range
const getRandomNumber = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

// Function to generate random data
const generateRandomData = (length: number) => {
  return Array.from({ length }, () => ({
    x: getRandomNumber(-100, 100),
    y: getRandomNumber(-100, 100),
    r: getRandomNumber(5, 20),
  }));
};

// Chart options
const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    customCanvasBackgroundColor: {
      color: 'rgba(31, 7, 87, 1)', // Set your desired background color here
    },
  },
};

// Chart data
const data = {
  datasets: [
    {
      label: 'Losses',
      data: generateRandomData(50),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Wins',
      data: generateRandomData(50),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

// BubbleChart component
const BubbleChart = () => {
  return (
    <>
      <Bubble options={options} data={data} />
    </>
  );
};

export default BubbleChart;
