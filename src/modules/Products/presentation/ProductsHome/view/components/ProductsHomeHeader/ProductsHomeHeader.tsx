import { IHomeHeaderProps } from './ProductsHomeHeader.types';
import { selectOptions } from './ProductsHomeHeader.constants';

import { BaseSelect } from 'src/common';

import styles from './ProductsHomeHeader.module.scss';

const ProductsHomeHeader = (props: IHomeHeaderProps) => {
  const { selectedValue, onSelectChange } = props;

  return (
    <div className={styles.container}>
      <span>Фильтр по типу продукции</span>

      <BaseSelect
        name={'productsHomeSelect'}
        options={selectOptions}
        selectedValue={selectedValue}
        onChange={(value) => onSelectChange(value)}
      />
    </div>
  );
};

export default ProductsHomeHeader;
