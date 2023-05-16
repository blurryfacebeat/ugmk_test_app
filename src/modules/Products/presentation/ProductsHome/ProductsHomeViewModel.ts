import { Point, SeriesOptionsType } from 'highcharts';
import { makeAutoObservable, runInAction } from 'mobx';

import {
  IProductsViewModel,
  IProductsViewModelCases,
  IProductsViewModelProps,
} from './ProductsHomeViewModel.types';
import { filterLocalStorageUtil } from './helpers';
import { formatFactoryName } from 'src/modules/Products/helpers';
import { TProductFilterTypeKeyof } from 'src/modules/Products/types';

export class ProductsHomeViewModel implements IProductsViewModel {
  private readonly _cases: IProductsViewModelCases;
  private _isLoading: boolean = false;
  private _chartData: Array<SeriesOptionsType> = [];
  private _filterData: TProductFilterTypeKeyof = 'all';

  constructor({ cases }: IProductsViewModelProps) {
    this._cases = cases;

    makeAutoObservable(this);

    this.initFilter();
  }

  async fetchDataForChart(event: (factoryId: number, point: Point) => void) {
    try {
      runInAction(() => (this._isLoading = true));

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
          data: Object.values(value.monthsWeight).map(
            (item) => item[this._filterData].ton,
          ),
        });
      });

      runInAction(() => (this._chartData = chartData));
    } catch (error) {
      throw new Error('Произошла ошибка при загрузке продуктов');
    } finally {
      runInAction(() => (this._isLoading = false));
    }
  }

  changeFilter(newValue: TProductFilterTypeKeyof) {
    const { setFilterValue } = filterLocalStorageUtil();

    this._filterData = newValue;
    setFilterValue(newValue);
  }

  get chartData() {
    return this._chartData;
  }

  get isLoading() {
    return this._isLoading;
  }

  get filterData() {
    return this._filterData;
  }

  private async getData() {
    return this._cases.getProductsDataCase.get();
  }

  private initFilter() {
    const { getFilterValue } = filterLocalStorageUtil();

    this._filterData = getFilterValue();
  }
}
