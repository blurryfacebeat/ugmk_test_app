import { SeriesOptionsType, Point } from 'highcharts';

import { PRODUCTS_FILTER_TYPE } from '../../types';
import { GetProductsDataCase } from '../../domain/GetProductsDataCase/GetProductsDataCase';

export interface IProductsViewModelCases {
  getProductsDataCase: GetProductsDataCase;
}

export interface IProductsViewModelProps {
  cases: IProductsViewModelCases;
}

export interface IProductsViewModel {
  getDataForChart: (
    event: (factoryId: number, point: Point) => void,
    type: keyof typeof PRODUCTS_FILTER_TYPE,
  ) => Promise<Array<SeriesOptionsType>>;
}
