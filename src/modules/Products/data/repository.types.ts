type TProduct = null | number;

export interface IProductItem {
  date: string | null;
  factory_id: number;
  id: number;
  product1: TProduct;
  product2: TProduct;
  product3: TProduct;
}

export interface IProductsRepository {
  getData: () => Promise<Array<IProductItem>>;
}
