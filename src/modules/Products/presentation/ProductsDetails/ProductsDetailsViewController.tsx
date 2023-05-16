import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { useErrorBoundary } from 'react-error-boundary';

import { IProductsDetailsViewControllerProps } from './ProductsDetailsViewController.types';

import { TwoToneLoader } from '../../../../common';
import ProductsDetailsView from './view/ProductsDetailsView';

const ProductsDetailsViewController = (
  props: IProductsDetailsViewControllerProps,
) => {
  const { viewModel } = props;

  const { showBoundary } = useErrorBoundary();

  const { factoryId, monthId } = useParams<{
    factoryId: string;
    monthId: string;
  }>();

  const getDataForChart = async () => {
    try {
      await viewModel.fetchDataForChart(Number(factoryId), Number(monthId));
    } catch (error) {
      showBoundary(error);
    }
  };

  useEffect(() => {
    getDataForChart();
  }, []);

  return (
    <>
      {!viewModel.isLoading ? (
        <ProductsDetailsView
          factoryId={Number(factoryId) || null}
          monthId={Number(monthId) || null}
          chartData={viewModel.chartData}
        />
      ) : (
        <TwoToneLoader />
      )}
    </>
  );
};

export default observer(ProductsDetailsViewController);
