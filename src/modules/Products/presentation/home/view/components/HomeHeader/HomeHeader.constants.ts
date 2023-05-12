import { PRODUCTS_FILTER_TYPE } from '../../../../../types';
import { IBaseSelectOption } from '../../../../../../../common/components/BaseSelect/BaseSelect.types';

export const selectOptions: Array<IBaseSelectOption> = [
  {
    name: 'Все продукты',
    value: PRODUCTS_FILTER_TYPE.all,
  },
  {
    name: 'Продукт 1',
    value: PRODUCTS_FILTER_TYPE.product1,
  },
  {
    name: 'Продукт 2',
    value: PRODUCTS_FILTER_TYPE.product2,
  },
  {
    name: 'Продукт 3',
    value: PRODUCTS_FILTER_TYPE.product3,
  },
];
