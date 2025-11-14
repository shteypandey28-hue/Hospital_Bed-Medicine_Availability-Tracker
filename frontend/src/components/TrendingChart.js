import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import './TrendingChart.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const TrendingChart = ({ data }) => {
  if (!data) return null;

  const chartData = {
    labels: data.dates,
    datasets: [
      {
        label: 'Available Beds',
        data: data.beds,
        borderColor: '#64b5f6',
        backgroundColor: 'rgba(100, 181, 246, 0.1)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#64b5f6',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
      },
      {
        label: 'Medicine Stock',
        data: data.medicines,
        borderColor: '#81c784',
        backgroundColor: 'rgba(129, 199, 132, 0.1)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#81c784',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#e0e0e0',
          font: {
            size: 12,
            weight: '500',
          },
          padding: 15,
        },
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(30, 39, 66, 0.95)',
        titleColor: '#e0e0e0',
        bodyColor: '#e0e0e0',
        borderColor: '#64b5f6',
        borderWidth: 1,
        padding: 12,
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#b0bec5',
        },
        grid: {
          color: 'rgba(176, 190, 197, 0.1)',
        },
      },
      y: {
        ticks: {
          color: '#b0bec5',
        },
        grid: {
          color: 'rgba(176, 190, 197, 0.1)',
        },
      },
    },
  };

  return (
    <div className="trending-chart">
      <h2 className="section-title">📈 Trending Data (Last 7 Days)</h2>
      <div className="chart-container">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default TrendingChart;

