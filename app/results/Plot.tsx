import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface IPlotProps {
  imageId: string | number;
  wowow: string | number;
  meh: string | number;
}

export default function ResultPlot(props: IPlotProps) {
  const { imageId, wowow, meh } = props;
  const labels = ['wowow', 'meh'];
  const data = {
    labels,
    datasets: [
      {
        label: 'wowow',
        data: [wowow],
        backgroundColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'meh',
        data: [meh],
        backgroundColor: 'rgb(132, 99, 255)',
      }
    ],
  };  
  const options = {
    plugins: {
      title: {
        display: true,
        text: `Image #${imageId}`,
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: false,
      },
      y: {
        stacked: false,
      },
    },
  };
  return <Bar options={options} data={data} />;
}
