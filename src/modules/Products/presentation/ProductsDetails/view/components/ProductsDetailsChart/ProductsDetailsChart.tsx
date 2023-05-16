import { Options } from 'highcharts';

import { chartOptions } from './ProductsDetailsChart.options';
import { IProductsDetailsChartProps } from './ProductsDetailsChart.types';

import { BaseChart } from 'src/modules/Chart';

export const ProductsDetailsChart = (props: IProductsDetailsChartProps) => {
  const { series } = props;

  const options: Options = {
    ...chartOptions,
    series,
  };

  return <BaseChart options={options} />;
};

export default ProductsDetailsChart;
