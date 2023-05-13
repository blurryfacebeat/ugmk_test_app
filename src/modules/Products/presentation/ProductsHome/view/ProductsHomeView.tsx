import React from 'react';

import { IProductsHomeViewProps } from './ProductsHomeView.types';

import { ProductsHomeChart, ProductsHomeHeader } from './components';

import styles from './ProductsHomeView.module.scss';

const ProductsHomeView = (props: IProductsHomeViewProps) => {
  const { chartData, selectedValue, onSelectChange } = props;

  return (
    <div className={styles.container}>
      <ProductsHomeHeader
        onSelectChange={(value) => onSelectChange(value)}
        selectedValue={selectedValue}
      />

      <div className={styles.chartContainer}>
        <ProductsHomeChart series={chartData} />
      </div>
    </div>
  );
};

export default ProductsHomeView;
