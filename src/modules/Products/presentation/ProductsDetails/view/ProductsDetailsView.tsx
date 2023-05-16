import { useNavigate } from 'react-router-dom';

import { BaseButton } from 'src/common';
import { getMonthName } from 'src/utils';
import { formatFactoryName } from 'src/modules/Products/helpers';
import { IProductsDetailsViewProps } from './ProductsDetailsView.types';

import { ProductsDetailsChart } from './components';

import styles from './ProductsDetailsView.module.scss';

const ProductsDetailsView = (props: IProductsDetailsViewProps) => {
  const { chartData, monthId, factoryId } = props;

  const navigate = useNavigate();

  const routeToHome = () => navigate('/');

  return (
    <div className={styles.container}>
      <BaseButton text={'На главную'} onClick={routeToHome} />

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
