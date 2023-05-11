type TProduct = null | number;

interface TDate {
  string: string;
  id: number;
}

export interface IResponseProductItem {
  date: string | null;
  factory_id: number;
  id: number;
  product1: TProduct;
  product2: TProduct;
  product3: TProduct;
}

export interface IProductItem {
  date: TDate | null;
  factory_id: number;
  id: number;
  product1: TProduct;
  product2: TProduct;
  product3: TProduct;
}

export interface IMonthWeightItem {
  product1: number;
  product2: number;
  product3: number;
  all: number;
}

export type TFactoryMonthWeight = Record<number, IMonthWeightItem>;

export interface IFactoryData {
  items: Array<IProductItem>;
  monthsWeight: TFactoryMonthWeight;
}

export type TMappedProducts = Map<number, IFactoryData>;

export interface IProductsDataSource {
  getData: () => Promise<TMappedProducts>;
}
