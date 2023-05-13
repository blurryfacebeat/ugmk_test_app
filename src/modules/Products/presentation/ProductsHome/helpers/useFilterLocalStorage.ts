import { TProductFilterTypeKeyof } from '../../../types';

export const useFilterLocalStorage = () => {
  const setFilterValue = (value: TProductFilterTypeKeyof) =>
    localStorage.setItem('filterValue', value);

  const getFilterValue = () =>
    localStorage.getItem('filterValue') as TProductFilterTypeKeyof;

  return {
    setFilterValue,
    getFilterValue,
  };
};
