import { TProductFilterTypeKeyof } from '../../../../../types';

export interface IHomeHeaderProps {
  selectedValue: TProductFilterTypeKeyof;
  onSelectChange: (value: string) => void;
}
