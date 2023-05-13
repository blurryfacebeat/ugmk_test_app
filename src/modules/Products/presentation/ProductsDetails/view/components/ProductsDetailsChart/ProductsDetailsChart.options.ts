import { Options } from 'highcharts';

export const chartOptions: Options = {
  title: {
    text: '',
  },
  chart: {
    plotBackgroundColor: undefined,
    plotBorderWidth: undefined,
    plotShadow: false,
    type: 'pie',
    height: '400px',
  },
  colors: ['#E3C565', '#3CB043', '#3944BC'],
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        connectorWidth: 0,
        style: {
          textOutline: undefined,
        },
        formatter: function () {
          return (
            '<span style="color: ' + this.color + '">' + this.y + '</span>'
          );
        },
      },
      showInLegend: true,
    },
  },
};
