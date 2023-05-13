import React from 'react';

import { getMonthName } from '../../../../../utils';
import { formatFactoryName } from '../../../helpers';
import { IProductsDetailsViewProps } from './ProductsDetailsView.types';

import { ProductsDetailsChart } from './components';

import styles from './ProductsDetailsView.module.scss';

const ProductsDetailsView = (props: IProductsDetailsViewProps) => {
  const { chartData, monthId, factoryId } = props;

  return (
    <div className={styles.container}>
      <p className={styles.title}>
        {`Статистика по продукции ${formatFactoryName(
          factoryId || 0,
          true,
        )} за ${getMonthName(typeof monthId === 'number' ? monthId - 1 : 0)}`}
      </p>

      <div className={styles.chartContainer}>
        <ProductsDetailsChart series={chartData} />
      </div>
    </div>
  );
};

export default ProductsDetailsView;
