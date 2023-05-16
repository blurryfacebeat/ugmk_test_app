import { PRODUCT_NAME } from 'src/modules/Products/constants';

export const formatProductName = (id: keyof typeof PRODUCT_NAME) =>
  PRODUCT_NAME[id];
