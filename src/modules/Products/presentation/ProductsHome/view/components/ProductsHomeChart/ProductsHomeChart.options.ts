import { Options } from 'highcharts';

export const chartOptions: Options = {
  chart: {
    type: 'column',
    height: '400px',
  },
  colors: ['#D0312D', '#3944BC'],
  yAxis: {
    title: {
      text: 'Тонн',
    },
  },
  xAxis: {
    min: 0,
    max: 11,
    categories: [
      'Янв',
      'Фев',
      'Мар',
      'Апр',
      'Май',
      'Июн',
      'Июл',
      'Авг',
      'Сен',
      'Окт',
      'Ноя',
      'Дек',
    ],
    crosshair: true,
  },
  plotOptions: {
    series: {
      cursor: 'pointer',
    },
  },
};
