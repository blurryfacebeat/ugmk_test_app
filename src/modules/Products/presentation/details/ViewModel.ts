import { SeriesOptionsType } from 'highcharts';

import { PRODUCTS_FILTER_TYPE } from '../../types';
import { formatKgToTons } from '../../../../utils';
import {
  IProductsDetailsViewModel,
  IProductsDetailsViewModelCases,
  IProductsDetailsViewModelProps,
} from './ViewModel.types';

export class ProductsDetailsViewModel implements IProductsDetailsViewModel {
  private readonly _cases: IProductsDetailsViewModelCases;

  constructor({ cases }: IProductsDetailsViewModelProps) {
    this._cases = cases;
  }

  async getDataForChart(factoryId: number, monthId: number) {
    const response = await this.getData();

    const chartData: Array<SeriesOptionsType> = [];

    response.forEach((value, key) => {
      const factoryName = formatFactoryName(key);

      chartData.push({
        type: 'pie',
        name: 'Тонн',
        colorByPoint: true,
        events: {
          click: ({ point }) => event(),
        },
        data: Object.values(value.monthsWeight).map((item) =>
          formatKgToTons(item[type]),
        ),
      });
    });

    return chartData;
  }

  private async getData() {
    return this._cases.getProductsDataCase.get();
  }
}
