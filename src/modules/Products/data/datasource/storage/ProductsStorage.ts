import { TMappedProducts } from '../ProductsDataSource.types';

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

  isAllItemsEmpty() {
    let result = true;

    this._data.forEach((item) => {
      if (!!item.items.length) result = false;
    });

    return result;
  }
}

export const productStorage = ProductsStorage.getInstance();
