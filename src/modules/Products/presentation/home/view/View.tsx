import React from 'react';

import { IProductsHomeViewProps } from './View.types';

import { HomeChart } from './components';
import { HomeHeader } from './components/HomeHeader';

import styles from './View.module.scss';

const ProductsHomeView = (props: IProductsHomeViewProps) => {
  const { chartData, selectedValue, onSelectChange } = props;

  return (
    <div className={styles.container}>
      <HomeHeader
        onSelectChange={(value) => onSelectChange(value)}
        selectedValue={selectedValue}
      />

      <div className={styles.chartContainer}>
        <HomeChart series={chartData} />
      </div>
    </div>
  );
};

export default ProductsHomeView;
