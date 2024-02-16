//import React from 'react';
//import Plot from 'react-plotly.js';

/*
export default function ResultPlot (props: IPlotProps) {
  const { imageId, wowow, meh } = props;
  return (
    <Plot
      data={[
        {
          x: ['wowow', 'meh'],
          y: [wowow, meh],
          type: 'scatter',
          mode: 'lines+markers',
          marker: {color: 'red'},
        },
        {type: 'bar', x: ['wowow', 'meh'], y: [wowow, meh]},
      ]}
      layout={ {width: 320, height: 240, title: `Image #${imageId}`} }
    />
  );
}
*/
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
        label: `Image #${imageId}`,
        data: [wowow, meh],
        backgroundColor: 'rgb(255, 99, 132)',
      }
    ],
  };  
  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Bar Chart Results',
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
