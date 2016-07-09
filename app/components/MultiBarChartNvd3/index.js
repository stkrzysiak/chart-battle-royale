/*
 * A simple nvd3 line chart
 */

import React from 'react';
import NVD3Chart from 'react-nvd3';

function getDatum(data, colors) {
  const datum = [];
  const arrayLength = data.length;
  for (let i = 0; i < arrayLength; i++) {
    datum.push({
      values: data[i],
      key: `Series  ${i}`,
      color: colors.shift(),
    });
  }
  return datum;
}


export default ({ data, colors }) => {
  const datum = getDatum(data, colors.slice(0));
  return (
    <div>
      <NVD3Chart
        datum={datum}
        groupSpacing={0.5}
        id="lineChart"
        type="multiBarChart"
        width="800"
        height="600"
        reduceXTicks={false}
        rotateLabels={40}
        x="x"
        y="y"
      />
    </div>
  );
};
