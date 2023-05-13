import { PRODUCTS_NAME } from '../../../constants/productsName';

export const formatProductName = (id: keyof typeof PRODUCTS_NAME) =>
  PRODUCTS_NAME[id];
