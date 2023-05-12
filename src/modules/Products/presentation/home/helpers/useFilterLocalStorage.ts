import { PRODUCTS_FILTER_TYPE } from '../../../types';

export const useFilterLocalStorage = () => {
  const setFilterValue = (value: keyof typeof PRODUCTS_FILTER_TYPE) =>
    localStorage.setItem('filterValue', value);

  const getFilterValue = () =>
    localStorage.getItem('filterValue') as keyof typeof PRODUCTS_FILTER_TYPE;

  return {
    setFilterValue,
    getFilterValue,
  };
};
