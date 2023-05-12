import React from 'react';

import { IHomeHeaderProps } from './HomeHeader.types';
import { selectOptions } from './HomeHeader.constants';

import BaseSelect from '../../../../../../../common/components/BaseSelect/BaseSelect';

import styles from './HomeHeader.module.scss';

const HomeHeader = (props: IHomeHeaderProps) => {
  const { selectedValue, onSelectChange } = props;

  return (
    <div className={styles.container}>
      <span>Фильтр по типу продукции</span>

      <BaseSelect
        name={'homeSelect'}
        options={selectOptions}
        selectedValue={selectedValue}
        onChange={(value) => onSelectChange(value)}
      />
    </div>
  );
};

export default HomeHeader;
