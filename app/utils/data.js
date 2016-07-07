import moment from 'moment';
import Chance from 'chance';
const chance = new Chance();
const months = moment.months();

export const generateBarChartData = () => {
  const randomMonth = month => {
    return { x: month, y: chance.integer({ min: 100, max: 1000 }) };
  };
  const series = [];
  for (let i = 0; i < 5; i++) {
    series.push(months.map(month => randomMonth(month)));
  }
  return series;
};
