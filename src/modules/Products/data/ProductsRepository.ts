import { IProductsDataSource } from './datasource';
import { IProductsRepository } from './ProductsRepository.types';

export class ProductsRepository implements IProductsRepository {
  private readonly _dataSource: IProductsDataSource;

  constructor(dataSource: IProductsDataSource) {
    this._dataSource = dataSource;
  }

  async getData() {
    try {
      return this._dataSource.getData();
    } catch (error) {
      throw new Error('Произошла ошибка при загрузке продуктов');
    }
  }
}
