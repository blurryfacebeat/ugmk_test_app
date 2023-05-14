import { IProductsRepository } from '../../data';
import { IGetProductsDataCase } from './GetProductsDataCase.types';

export class GetProductsDataCase implements IGetProductsDataCase {
  private readonly _repository: IProductsRepository;

  constructor(repository: IProductsRepository) {
    this._repository = repository;
  }

  async get() {
    return this._repository.getData();
  }
}
