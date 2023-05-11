import {
  IProductsDataSource,
  TMappedProducts,
} from './datasource/products.types';
import { IProductsRepository } from './repository.types';

export class ProductsRepository implements IProductsRepository {
  private readonly _dataSource: IProductsDataSource;

  constructor(dataSource: IProductsDataSource) {
    this._dataSource = dataSource;
  }

  async getData(): Promise<TMappedProducts> {
    return this._dataSource.getData();
  }
}
