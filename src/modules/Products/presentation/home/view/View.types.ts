import { SeriesOptionsType } from 'highcharts';

import { PRODUCTS_FILTER_TYPE } from '../../../types';

export interface IProductsHomeViewProps {
  chartData: Array<SeriesOptionsType>;
  selectedValue: keyof typeof PRODUCTS_FILTER_TYPE;
  onSelectChange: (value: string) => void;
}
