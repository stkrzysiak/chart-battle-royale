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
  let formattedSeries1 = ['series1'];
  let formattedSeries2 = ['series2'];

  data.series1.map((val) => formattedSeries1.push(val.y));
  data.series2.map((val) => formattedSeries2.push(val.y));
  console.log(formattedSeries2);
  return [
    formattedSeries1,
    formattedSeries2,
  ];
}


function MultiBarChartC3({ data }) {
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
      }}
    />
  );
}

export default MultiBarChartC3;
