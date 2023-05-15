import { PRODUCT_NAME } from '../../../constants';

export const formatProductName = (id: keyof typeof PRODUCT_NAME) =>
  PRODUCT_NAME[id];
