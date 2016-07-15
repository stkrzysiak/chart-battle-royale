import moment from 'moment';
import Chance from 'chance';
const chance = new Chance();
const months = moment.months();

export const adjustMonths = (dataPoints) => {
  if (dataPoints <= 12) {
    return months.slice(0, dataPoints);
  } else if (dataPoints > 12) {
    const adjustedMonths = [];
    for (let i = 0; i < dataPoints; i++) {
      adjustedMonths.push(moment.months(i));
    }
    return adjustedMonths;
  }
  return months;
};

export const generateBarChartData = (dataPoints, seriesCount) => {
  const series = [];
  const totalMonths = adjustMonths(dataPoints);
  const randomMonth = month => {
    return { x: month, y: chance.integer({ min: 100, max: 1000 }) };
  };

  for (let i = 0; i < seriesCount; i++) {
    series.push(totalMonths.map(month => randomMonth(month)));
  }

  return series;
};
