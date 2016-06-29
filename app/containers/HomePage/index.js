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
import LineChartNvd3 from '../../components/LineChartNvd3';
import { Tabs, Tab } from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default () =>
  (<Tabs>
    <Tab label="NVD3-1">
      <div>
        <LineChartNvd3 />
      </div>
    </Tab>
    <Tab label="NVD3-2">
        <LineChartNvd3 />
    </Tab>
    <Tab label="NVD3-3">
        <LineChartNvd3 />
    </Tab>
    <Tab label="NVD3-4">
        <LineChartNvd3 />
    </Tab>
  </Tabs>);
