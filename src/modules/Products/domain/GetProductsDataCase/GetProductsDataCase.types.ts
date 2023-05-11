import { TMappedProducts } from '../../data/datasource/products.types';

export interface IGetProductsDataCase {
  get: () => Promise<TMappedProducts>;
}
