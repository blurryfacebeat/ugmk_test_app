import { Point } from 'highcharts';

import { GetProductsDataCase } from '../../domain';
import { TProductFilterTypeKeyof } from '../../types';

export interface IProductsViewModelCases {
  getProductsDataCase: GetProductsDataCase;
}

export interface IProductsViewModelProps {
  cases: IProductsViewModelCases;
}

export interface IProductsViewModel {
  fetchDataForChart: (
    event: (factoryId: number, point: Point) => void,
  ) => Promise<void>;

  changeFilter: (newValue: TProductFilterTypeKeyof) => void;
}
