import { SeriesOptionsType } from 'highcharts';

import { formatKgToTons } from '../../../../utils';
import {
  IProductsDetailsViewModel,
  IProductsDetailsViewModelCases,
  IProductsDetailsViewModelProps,
} from './ViewModel.types';
import { PRODUCTS_NAME } from '../../constants/productsName';
import { formatProductName } from './helpers/formatProductName';

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

      const factoryMonth = response.get(factoryId)?.monthsWeight[monthId];

      if (!factoryMonth) throw Error();

      return [
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
      ];
    } catch (err) {
      throw err;
    }
  }

  private async getData() {
    return this._cases.getProductsDataCase.get();
  }
}
