import { PRODUCTS_FILTER_TYPE, TProductFilterTypeKeyof } from '../../../types';

export const useFilterLocalStorage = () => {
  const setFilterValue = (value: TProductFilterTypeKeyof) =>
    localStorage.setItem('filterValue', value);

  const getFilterValue = () => {
    const result = localStorage.getItem(
      'filterValue',
    ) as TProductFilterTypeKeyof;

    if (!Object.keys(PRODUCTS_FILTER_TYPE).includes(result)) {
      setFilterValue(PRODUCTS_FILTER_TYPE.all);

      return PRODUCTS_FILTER_TYPE.all;
    }

    return result;
  };

  return {
    setFilterValue,
    getFilterValue,
  };
};
