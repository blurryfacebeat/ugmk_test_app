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

export interface IMonthWeightProduct {
  kg: number;
  ton: number;
}

export interface IMonthWeightItem {
  product1: IMonthWeightProduct;
  product2: IMonthWeightProduct;
  product3: IMonthWeightProduct;
  all: IMonthWeightProduct;
}

export type TProductKeyName = 'product1' | 'product2' | 'product3' | 'all';

export type TFactoryMonthWeight = Record<number, IMonthWeightItem>;

export interface IFactoryData {
  items: Array<IProductItem>;
  monthsWeight: TFactoryMonthWeight;
}

export type TMappedProducts = Map<number, IFactoryData>;

export interface IProductsDataSource {
  getData: () => Promise<TMappedProducts>;
}
