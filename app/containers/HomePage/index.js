/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import NVD3Chart from 'react-nvd3';

function getDatum(j) {
  const sin = [];
  const cos = [];

  for (let i = 0; i < 100; i++) {
    sin.push({ x: i, y: Math.sin(i / j) });
    cos.push({ x: i, y: 0.5 * Math.cos(i / j) });
  }

  return [
    {
      values: sin,
      key: 'Sine Wave',
      color: '#ff7f0e',
    },
    {
      values: cos,
      key: 'Cosine Wave',
      color: '#2ca02c',
    },
  ];
}


export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const datum = getDatum();
    return (
      <div>
        <h1> Sample chart</h1>
        <NVD3Chart id="barChart" type="discreteBarChart" datum={datum} x="label" y="value" />
      </div>
    );
  }
}
