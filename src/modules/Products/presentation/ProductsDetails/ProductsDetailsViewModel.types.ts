import { GetProductsDataCase } from 'src/modules/Products/domain';

export interface IProductsDetailsViewModelCases {
  getProductsDataCase: GetProductsDataCase;
}

export interface IProductsDetailsViewModelProps {
  cases: IProductsDetailsViewModelCases;
}

export interface IProductsDetailsViewModel {
  fetchDataForChart: (factoryId: number, monthId: number) => void;
}
