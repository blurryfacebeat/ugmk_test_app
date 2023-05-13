import { SeriesOptionsType } from 'highcharts';

export interface IProductsDetailsViewProps {
  chartData: Array<SeriesOptionsType>;
  monthId: number | null;
  factoryId: number | null;
}
