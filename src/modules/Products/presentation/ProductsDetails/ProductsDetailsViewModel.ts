import { SeriesOptionsType } from 'highcharts';

import {
  IProductsDetailsViewModel,
  IProductsDetailsViewModelCases,
  IProductsDetailsViewModelProps,
} from './ProductsDetailsViewModel.types';
import { formatProductName } from './helpers';
import { PRODUCTS_NAME } from '../../constants';
import { formatKgToTons } from '../../../../utils';

export class ProductsDetailsViewModel implements IProductsDetailsViewModel {
  private readonly _cases: IProductsDetailsViewModelCases;

  constructor({ cases }: IProductsDetailsViewModelProps) {
    this._cases = cases;
  }

  async getDataForChart(
    factoryId: number,
    monthId: number,
  ): Promise<Array<SeriesOptionsType>> {
    try {
      const response = await this.getData();

      const factoryMonth = response?.get(factoryId)?.monthsWeight[monthId];

      if (!factoryMonth)
        throw new Error('Данных для выбранных месяца и фабрики не существует');

      return factoryMonth
        ? [
            {
              type: 'pie',
              name: 'Тонн',
              colorByPoint: true,
              data: Object.entries(factoryMonth)
                .slice(0, 3)
                .map(([key, value]) => ({
                  name: formatProductName(key as keyof typeof PRODUCTS_NAME),
                  y: formatKgToTons(value),
                })),
            },
          ]
        : [];
    } catch (err) {
      throw err;
    }
  }

  private async getData() {
    return this._cases.getProductsDataCase.get();
  }
}
