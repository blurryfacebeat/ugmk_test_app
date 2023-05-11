import { IProductsRepository } from '../../data/repository.types';
import { IGetProductsDataCase } from './GetProductsDataCase.types';
import { TMappedProducts } from '../../data/datasource/products.types';

export class GetProductsDataCase implements IGetProductsDataCase {
  private readonly _repository: IProductsRepository;

  constructor(repository: IProductsRepository) {
    this._repository = repository;
  }

  async get(): Promise<TMappedProducts> {
    return this._repository.getData();
  }
}
