import { Options } from 'highcharts';

import { chartOptions } from './ProductsHomeChart.options';
import { IProductsHomeChartProps } from './ProductsHomeChart.types';

import { BaseChart } from 'src/modules/Chart';

export const ProductsHomeChart = (props: IProductsHomeChartProps) => {
  const { series } = props;

  const options: Options = {
    ...chartOptions,
    series,
  };

  return <BaseChart options={options} />;
};

export default ProductsHomeChart;
