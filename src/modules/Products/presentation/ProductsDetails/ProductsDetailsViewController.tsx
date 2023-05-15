import { useParams } from 'react-router-dom';
import { SeriesOptionsType } from 'highcharts';
import React, { useEffect, useState } from 'react';
import { useErrorBoundary } from 'react-error-boundary';

import { IProductsDetailsViewControllerProps } from './ProductsDetailsViewController.types';

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
    }
  };

  useEffect(() => {
    getDataForChart();
  }, []);

  return (
    <ProductsDetailsView
      factoryId={Number(factoryId) || null}
      monthId={Number(monthId) || null}
      chartData={chartData}
    />
  );
};

export default ProductsDetailsViewController;
