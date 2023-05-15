import { Options } from 'highcharts';

export const chartOptions: Options = {
  accessibility: {
    enabled: false,
  },
  title: {
    text: '',
  },
  xAxis: {
    title: {
      text: '',
    },
  },
  yAxis: {
    title: {
      text: '',
    },
  },
  plotOptions: {
    pie: {
      cursor: 'pointer',
      dataLabels: {
        enabled: false,
      },
      showInLegend: true,
    },
    column: {
      cursor: 'pointer',
    },
  },
  legend: {
    symbolRadius: 0,
    labelFormatter: function () {
      return '<span style="color: ' + this.color + '">' + this.name + '</span>';
    },
  },
};
