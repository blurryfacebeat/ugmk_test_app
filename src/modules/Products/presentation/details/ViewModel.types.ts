import { SeriesOptionsType } from 'highcharts';

import { GetProductsDataCase } from '../../domain/GetProductsDataCase/GetProductsDataCase';

export interface IProductsDetailsViewModelCases {
  getProductsDataCase: GetProductsDataCase;
}

export interface IProductsDetailsViewModelProps {
  cases: IProductsDetailsViewModelCases;
}

export interface IProductsDetailsViewModel {
  getDataForChart: (
    factoryId: number,
    monthId: number,
  ) => Array<SeriesOptionsType>;
}
