/*
 * A simple nvd3 line chart
 */

import React from 'react';
import NVD3Chart from 'react-nvd3';
import moment from 'moment';
import Chance from 'chance';
const chance = new Chance();
const months = moment.months();

function getDatum() {
  const randomMonth = month => {
    return { x: month, y: chance.integer({ min: 100, max: 1000 }) };
  };

  const line1 = months.map(month => randomMonth(month));
  const line2 = months.map(month => randomMonth(month));

  return [
    {
      values: line1,
      key: 'Line 1',
      color: '#ff7f0e',
    },
    {
      values: line2,
      key: 'Line 2',
      color: '#ff7f0e',
    },

  ];
}


export default () =>
  (
  <div>
    <h1> Sample line chart</h1>
    <NVD3Chart
      datum={getDatum()}
      id="lineChart"
      type="discreteBarChart"
      width="800"
      height="600"
      x="x"
      y="y"
    />
  </div>
    );
