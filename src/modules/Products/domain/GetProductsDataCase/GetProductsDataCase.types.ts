import { TMappedProducts } from '../../data';

export interface IGetProductsDataCase {
  get: () => Promise<TMappedProducts | undefined>;
}
