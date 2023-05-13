import { SeriesOptionsType } from 'highcharts';

import { TProductFilterTypeKeyof } from '../../../types';

export interface IProductsHomeViewProps {
  chartData: Array<SeriesOptionsType>;
  selectedValue: TProductFilterTypeKeyof;
  onSelectChange: (value: string) => void;
}
