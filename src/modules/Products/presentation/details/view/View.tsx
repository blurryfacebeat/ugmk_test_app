import React from 'react';

import { formatFactoryName } from '../../../helpers';
import { IProductsDetailsViewProps } from './View.types';

import { DetailsChart } from './components';

import styles from './View.module.scss';
import { getMonthName } from '../../../../../utils';

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
        <DetailsChart series={chartData} />
      </div>
    </div>
  );
};

export default ProductsDetailsView;
