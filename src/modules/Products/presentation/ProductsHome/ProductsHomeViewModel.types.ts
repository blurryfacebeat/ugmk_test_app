import { Point } from 'highcharts';

import { GetProductsDataCase } from 'src/modules/Products/domain';
import { TProductFilterTypeKeyof } from 'src/modules/Products/types';

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
