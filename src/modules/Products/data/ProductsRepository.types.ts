import { TMappedProducts } from './datasource';

export interface IProductsRepository {
  getData: () => Promise<TMappedProducts | undefined>;
}
