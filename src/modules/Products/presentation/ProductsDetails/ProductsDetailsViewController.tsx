import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SeriesOptionsType } from 'highcharts';
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

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [chartData, setChartData] = useState<Array<SeriesOptionsType>>([]);

  const getDataForChart = async () => {
    try {
      const response = await viewModel.getDataForChart(
        Number(factoryId),
        Number(monthId),
      );

      setChartData(response || []);
    } catch (error) {
      showBoundary(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDataForChart();
  }, []);

  return (
    <>
      {!isLoading ? (
        <ProductsDetailsView
          factoryId={Number(factoryId) || null}
          monthId={Number(monthId) || null}
          chartData={chartData}
        />
      ) : (
        <TwoToneLoader />
      )}
    </>
  );
};

export default ProductsDetailsViewController;
