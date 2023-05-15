import { Point, SeriesOptionsType } from 'highcharts';

import {
  IProductsViewModel,
  IProductsViewModelCases,
  IProductsViewModelProps,
} from './ProductsHomeViewModel.types';
import { formatFactoryName } from '../../helpers';
import { formatKgToTons } from '../../../../utils';
import { TProductFilterTypeKeyof } from '../../types';

export class ProductsHomeViewModel implements IProductsViewModel {
  private readonly _cases: IProductsViewModelCases;

  constructor({ cases }: IProductsViewModelProps) {
    this._cases = cases;
  }

  async getDataForChart(
    event: (factoryId: number, point: Point) => void,
    type: TProductFilterTypeKeyof,
  ) {
    try {
      const response = await this.getData();

      const chartData: Array<SeriesOptionsType> = [];

      response?.forEach((value, key) => {
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
    } catch (error) {
      throw new Error('Произошла ошибка при загрузке продуктов');
    }
  }

  private async getData() {
    return this._cases.getProductsDataCase.get();
  }
}
