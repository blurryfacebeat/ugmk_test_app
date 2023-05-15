import { PRODUCT_NAME } from '../../../../../constants';
import { PRODUCTS_FILTER_TYPE } from '../../../../../types';
import { IBaseSelectOption } from '../../../../../../../common';

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
