import { SeriesOptionsType } from 'highcharts';
import { makeAutoObservable, runInAction } from 'mobx';

import {
  throwNotFoundMonth,
  throwProductsNotLoaded,
} from 'src/modules/Products/exceptions';
import {
  IProductsDetailsViewModel,
  IProductsDetailsViewModelCases,
  IProductsDetailsViewModelProps,
} from './ProductsDetailsViewModel.types';
import { DefaultError } from 'src/common';
import { formatProductName } from './helpers';
import { PRODUCT_NAME } from 'src/modules/Products/constants';

export class ProductsDetailsViewModel implements IProductsDetailsViewModel {
  private readonly _cases: IProductsDetailsViewModelCases;
  private _isLoading: boolean = false;
  private _chartData: Array<SeriesOptionsType> = [];

  constructor({ cases }: IProductsDetailsViewModelProps) {
    this._cases = cases;

    makeAutoObservable(this);
  }

  async fetchDataForChart(factoryId: number, monthId: number) {
    try {
      runInAction(() => (this._isLoading = true));

      const response = await this.getData();

      const factoryMonth = response?.get(factoryId)?.monthsWeight[monthId];

      if (!factoryMonth) throwNotFoundMonth();

      runInAction(
        () =>
          (this._chartData = factoryMonth
            ? [
                {
                  type: 'pie',
                  name: 'Тонн',
                  colorByPoint: true,
                  data: Object.entries(factoryMonth)
                    .slice(0, 3)
                    .map(([key, value]) => ({
                      name: formatProductName(key as keyof typeof PRODUCT_NAME),
                      y: value.ton,
                    })),
                },
              ]
            : []),
      );
    } catch (error) {
      if (error instanceof Error) throw new DefaultError(error?.message);

      throwProductsNotLoaded();
    } finally {
      runInAction(() => (this._isLoading = false));
    }
  }

  get chartData() {
    return this._chartData;
  }

  get isLoading() {
    return this._isLoading;
  }

  private async getData() {
    return this._cases.getProductsDataCase.get();
  }
}
