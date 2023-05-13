import React from 'react';
import { Options } from 'highcharts';

import { BaseChart } from '../../../../../../Chart';
import { chartOptions } from './ProductsHomeChart.options';
import { IProductsHomeChartProps } from './ProductsHomeChart.types';

export const ProductsHomeChart = (props: IProductsHomeChartProps) => {
  const { series } = props;

  const options: Options = {
    ...chartOptions,
    series,
  };

  return <BaseChart options={options} />;
};

export default ProductsHomeChart;
