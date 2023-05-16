import { TMappedProducts } from 'src/modules/Products/data';

export interface IGetProductsDataCase {
  get: () => Promise<TMappedProducts | undefined>;
}
