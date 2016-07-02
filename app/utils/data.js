import moment from 'moment';
import Chance from 'chance';
const chance = new Chance();
const months = moment.months();

export const generateBarChartData = () => {
  const randomMonth = month => {
    return { x: month, y: chance.integer({ min: 100, max: 1000 }) };
  };

  const series1 = months.map(month => randomMonth(month));
  const series2 = months.map(month => randomMonth(month));
  return { series1, series2 };
};
