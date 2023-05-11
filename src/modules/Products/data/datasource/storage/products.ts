import { TMappedProducts } from '../products.types';

export class ProductsStorage {
  private static _instance: ProductsStorage;
  private _data: TMappedProducts = new Map();

  static getInstance(): ProductsStorage {
    if (!ProductsStorage._instance)
      ProductsStorage._instance = new ProductsStorage();

    return ProductsStorage._instance;
  }

  get data(): TMappedProducts {
    return this._data;
  }

  set data(data: TMappedProducts) {
    this._data = data;
  }

  get size(): number {
    return this._data.size;
  }
}

export const productStorage = ProductsStorage.getInstance();
