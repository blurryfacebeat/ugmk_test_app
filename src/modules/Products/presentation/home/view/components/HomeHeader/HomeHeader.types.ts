import { PRODUCTS_FILTER_TYPE } from '../../../../../types';

export interface IHomeHeaderProps {
  selectedValue: keyof typeof PRODUCTS_FILTER_TYPE;
  onSelectChange: (value: string) => void;
}
