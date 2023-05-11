import { TMappedProducts } from './datasource/products.types';

export interface IProductsRepository {
  getData: () => Promise<TMappedProducts>;
}
