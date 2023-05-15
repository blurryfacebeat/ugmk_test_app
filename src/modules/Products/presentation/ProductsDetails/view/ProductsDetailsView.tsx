import React from 'react';
import { useNavigate } from 'react-router-dom';

import { getMonthName } from '../../../../../utils';
import { formatFactoryName } from '../../../helpers';
import { IProductsDetailsViewProps } from './ProductsDetailsView.types';

import { ProductsDetailsChart } from './components';

import styles from './ProductsDetailsView.module.scss';
import { BaseButton } from '../../../../../common';

const ProductsDetailsView = (props: IProductsDetailsViewProps) => {
  const { chartData, monthId, factoryId } = props;

  const navigate = useNavigate();

  const onHomeClick = () => navigate('/');

  return (
    <div className={styles.container}>
      <BaseButton text={'На главную'} onClick={() => onHomeClick()} />

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
