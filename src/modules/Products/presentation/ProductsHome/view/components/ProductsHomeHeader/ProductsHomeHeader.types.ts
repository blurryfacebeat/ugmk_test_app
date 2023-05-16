import { TProductFilterTypeKeyof } from 'src/modules/Products/types';

export interface IHomeHeaderProps {
  selectedValue: TProductFilterTypeKeyof;
  onSelectChange: (value: string) => void;
}
