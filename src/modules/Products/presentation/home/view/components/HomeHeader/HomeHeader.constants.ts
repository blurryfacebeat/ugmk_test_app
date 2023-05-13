import { PRODUCTS_FILTER_TYPE } from '../../../../../types';
import { PRODUCTS_NAME } from '../../../../../constants/productsName';
import { IBaseSelectOption } from '../../../../../../../common/components/BaseSelect/BaseSelect.types';

export const selectOptions: Array<IBaseSelectOption> = [
  {
    name: PRODUCTS_NAME.all,
    value: PRODUCTS_FILTER_TYPE.all,
  },
  {
    name: PRODUCTS_NAME.product1,
    value: PRODUCTS_FILTER_TYPE.product1,
  },
  {
    name: PRODUCTS_NAME.product2,
    value: PRODUCTS_FILTER_TYPE.product2,
  },
  {
    name: PRODUCTS_NAME.product3,
    value: PRODUCTS_FILTER_TYPE.product3,
  },
];
