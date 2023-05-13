import { SeriesOptionsType, Point } from 'highcharts';

import { GetProductsDataCase } from '../../domain';
import { TProductFilterTypeKeyof } from '../../types';

export interface IProductsViewModelCases {
  getProductsDataCase: GetProductsDataCase;
}

export interface IProductsViewModelProps {
  cases: IProductsViewModelCases;
}

export interface IProductsViewModel {
  getDataForChart: (
    event: (factoryId: number, point: Point) => void,
    type: TProductFilterTypeKeyof,
  ) => Promise<Array<SeriesOptionsType>>;
}
