import React from 'react';
import Plot from 'react-plotly.js';

interface IPlotProps {
  imageId: string | number;
  wowow: string | number;
  meh: string | number;
}

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
