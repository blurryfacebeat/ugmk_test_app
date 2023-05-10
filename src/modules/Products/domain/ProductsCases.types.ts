import { IProductItem } from '../data/repository.types';

export type TMappedProducts = Map<number, Array<IProductItem>>;

export interface IProductsCases {
  getData: () => Promise<TMappedProducts>;
}
