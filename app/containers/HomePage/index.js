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
import { Tabs, Tab } from 'material-ui/Tabs';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin(); // for the tabs


import MultiBarChartNvd3 from '../../components/MultiBarChartNvd3';
import MultiBarChartC3 from '../../components/MultiBarChartC3';
import MultiBarChartHighCharts from '../../components/MultiBarChartHighCharts';
import { generateBarChartData } from '../../utils/data';


const data = generateBarChartData();

export default () =>
  (<Tabs>
    <Tab label="NVD3">
      <div>
        <MultiBarChartNvd3 data={data} />
      </div>
    </Tab>
    <Tab label="C3">
      <MultiBarChartC3 data={data} />
    </Tab>
    <Tab label="HighCharts">
      <MultiBarChartHighCharts data={data} />
    </Tab>
  </Tabs>);
