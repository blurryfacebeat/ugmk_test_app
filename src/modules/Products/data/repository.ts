import { HttpClient } from '../../HttpClient';
import { IProductItem, IProductsRepository } from './repository.types';

export class ProductsRepository implements IProductsRepository {
  private httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async getData(): Promise<Array<IProductItem>> {
    return this.httpClient.get('/products');
  }
}
