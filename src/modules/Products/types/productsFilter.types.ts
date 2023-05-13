export enum PRODUCTS_FILTER_TYPE {
  product1 = 'product1',
  product2 = 'product2',
  product3 = 'product3',
  all = 'all',
}

export type TProductFilterTypeKeyof = keyof typeof PRODUCTS_FILTER_TYPE;
