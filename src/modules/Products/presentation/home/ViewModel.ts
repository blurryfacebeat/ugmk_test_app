import { Point, SeriesOptionsType } from 'highcharts';

import {
  IProductsViewModel,
  IProductsViewModelCases,
  IProductsViewModelProps,
} from './ViewModel.types';
import { formatFactoryName } from '../../helpers';
import { PRODUCTS_FILTER_TYPE } from '../../types';
import { formatKgToTons } from '../../../../utils';

export class ProductsViewModel implements IProductsViewModel {
  private readonly _cases: IProductsViewModelCases;

  constructor({ cases }: IProductsViewModelProps) {
    this._cases = cases;
  }

  async getDataForChart(
    event: (factoryId: number, point: Point) => void,
    type: keyof typeof PRODUCTS_FILTER_TYPE,
  ) {
    const response = await this.getData();

    const chartData: Array<SeriesOptionsType> = [];

    response.forEach((value, key) => {
      const factoryName = formatFactoryName(key);

      chartData.push({
        type: 'column',
        name: factoryName,
        events: {
          click: ({ point }) => event(key, point),
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
