import { SeriesOptionsType } from 'highcharts';

import {
  IProductsDetailsViewModel,
  IProductsDetailsViewModelCases,
  IProductsDetailsViewModelProps,
} from './ProductsDetailsViewModel.types';
import { formatProductName } from './helpers';
import { PRODUCTS_NAME } from '../../constants';
import { formatKgToTons } from '../../../../utils';
import { throwNotFoundMonth, throwProductsNotLoaded } from '../../exceptions';
import { DefaultError } from '../../../../common';

export class ProductsDetailsViewModel implements IProductsDetailsViewModel {
  private readonly _cases: IProductsDetailsViewModelCases;

  constructor({ cases }: IProductsDetailsViewModelProps) {
    this._cases = cases;
  }

  async getDataForChart(
    factoryId: number,
    monthId: number,
  ): Promise<Array<SeriesOptionsType> | undefined> {
    try {
      const response = await this.getData();

      const factoryMonth = response?.get(factoryId)?.monthsWeight[monthId];

      if (!factoryMonth) throwNotFoundMonth();

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
                  y: value.ton,
                })),
            },
          ]
        : [];
    } catch (error) {
      if (error instanceof Error) {
        throw new DefaultError(error?.message);
      }

      throwProductsNotLoaded();
    }
  }

  private async getData() {
    return this._cases.getProductsDataCase.get();
  }
}
