import { PRODUCTS_NAME } from '../../../constants';

export const formatProductName = (id: keyof typeof PRODUCTS_NAME) =>
  PRODUCTS_NAME[id];
