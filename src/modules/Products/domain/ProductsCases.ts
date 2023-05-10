import { IProductsRepository } from '../data/repository.types';
import { IProductsCases, TMappedProducts } from './ProductsCases.types';

export class ProductsCases implements IProductsCases {
  private productsRepository: IProductsRepository;

  constructor(productsRepository: IProductsRepository) {
    this.productsRepository = productsRepository;
  }

  async getData(): Promise<TMappedProducts> {
    const productsMap: TMappedProducts = new Map();

    const result = await this.productsRepository.getData();

    for (let i = 1; i <= 2; i++) {
      productsMap.set(
        i,
        result.filter((item) => item.factory_id === i),
      );
    }

    console.log(321, productsMap);
    return productsMap;
  }
}
