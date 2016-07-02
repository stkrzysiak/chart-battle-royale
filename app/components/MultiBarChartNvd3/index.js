/*
 * A simple nvd3 line chart
 */

import React from 'react';
import NVD3Chart from 'react-nvd3';

function getDatum(data) {
  return [
    {
      values: data.series1,
      key: 'Line 1',
      color: '#ff7f0e',
    },
    {
      values: data.series2,
      key: 'Line 2',
      color: '#ff7f0e',
    },

  ];
}


export default ({ data }) => {
  const formattedData = getDatum(data);
  return (
    <div>
      <NVD3Chart
        datum={formattedData}
        id="lineChart"
        type="multiBarChart"
        width="800"
        height="600"
        x="x"
        y="y"
      />
    </div>
  );
};
