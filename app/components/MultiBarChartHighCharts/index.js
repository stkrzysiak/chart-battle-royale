/**
*
* MultiBarChartHighCharts
*
*/
import ReactHighcharts from 'react-highcharts';
import React from 'react';

function getDatum(data) {
  const formattedSeries1 = [];
  const formattedSeries2 = [];
  const xAxis = [];

  data.series1.map((val) => formattedSeries1.push(val.y));
  data.series2.map((val) => formattedSeries2.push(val.y));
  data.series2.map((val) => xAxis.push(val.x));

  console.log(formattedSeries2);
  return {
    formattedSeries1,
    formattedSeries2,
    xAxis,
  };
}

function MultiBarChartHighCharts({ data }) {
  const formattedData = getDatum(data);
  const config = {
    xAxis: {
      categories: formattedData.xAxis,
    },
    series: [{
      name: 'Series 1',
      data: formattedData.formattedSeries1,
    }, {
      name: 'Series 2',
      data: formattedData.formattedSeries2,
    }],
    chart: {
      type: 'column',
      height: 600,
      width: 800,
    },
  };
  return (
    <div>
      <ReactHighcharts config={config} />
    </div>
  );
}

export default MultiBarChartHighCharts;
