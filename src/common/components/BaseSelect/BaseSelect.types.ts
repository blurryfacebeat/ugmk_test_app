import { HTMLAttributes } from 'react';

export interface IBaseSelectOption {
  value: string;
  name: string;
}

export interface IBaseSelectProps
  extends Omit<HTMLAttributes<HTMLSelectElement>, 'onChange'> {
  name: string;
  options: Array<IBaseSelectOption>;
  selectedValue: string;
  onChange: (value: string) => void;
}
