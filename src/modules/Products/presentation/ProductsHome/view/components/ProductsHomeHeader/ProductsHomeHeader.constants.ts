import { IBaseSelectOption } from 'src/common';
import { PRODUCT_NAME } from 'src/modules/Products/constants';
import { PRODUCTS_FILTER_TYPE } from 'src/modules/Products/types';

export const selectOptions: Array<IBaseSelectOption> = [
  {
    name: PRODUCT_NAME.all,
    value: PRODUCTS_FILTER_TYPE.all,
  },
  {
    name: PRODUCT_NAME.product1,
    value: PRODUCTS_FILTER_TYPE.product1,
  },
  {
    name: PRODUCT_NAME.product2,
    value: PRODUCTS_FILTER_TYPE.product2,
  },
  {
    name: PRODUCT_NAME.product3,
    value: PRODUCTS_FILTER_TYPE.product3,
  },
];
