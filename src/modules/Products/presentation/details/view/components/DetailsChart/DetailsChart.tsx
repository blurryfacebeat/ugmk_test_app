import React from 'react';
import { Options } from 'highcharts';

import { chartOptions } from './options';
import { IChartProps } from './DetailsChart.types';

import BaseChart from '../../../../../../Chart/Chart';

export const HomeChart = (props: IChartProps) => {
  const { series } = props;

  const options: Options = {
    ...chartOptions,
    series,
  };

  return <BaseChart options={options} />;
};

export default HomeChart;
