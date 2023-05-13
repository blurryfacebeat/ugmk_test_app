import { IProductsRepository } from './ProductsRepository.types';
import { IProductsDataSource, TMappedProducts } from './datasource';

export class ProductsRepository implements IProductsRepository {
  private readonly _dataSource: IProductsDataSource;

  constructor(dataSource: IProductsDataSource) {
    this._dataSource = dataSource;
  }

  async getData(): Promise<TMappedProducts> {
    return this._dataSource.getData();
  }
}
