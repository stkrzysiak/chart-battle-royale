/**
*
* A multi bar chart using c3
*
*/
/*
 * A simple nvd3 line chart
 */

import React from 'react';

import Chart from 'react-c3-component';
// import 'c3/c3.css';

function getDatum(data) {
  const formattedSeries = [];
  const arrayLength = data.length;
  for (let i = 0; i < arrayLength; i++) {
    formattedSeries.push([`Series ${i}`]);
  }
  for (let i = 0; i < arrayLength; i++) {
    data[i].map((val) => formattedSeries[i].push(val.y));
  }

  return formattedSeries;
}


export default ({ data, colors }) => {
  const formattedData = getDatum(data);

  return (
    <Chart
      config={{
        data: {
          columns: formattedData,
          type: 'bar',
        },
        size: {
          width: 800,
          height: 600,
        },
        color: {
          pattern: colors,
        },
      }}
    />
  );
}
