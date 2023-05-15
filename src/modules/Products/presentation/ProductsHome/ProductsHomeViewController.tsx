import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { SeriesOptionsType, Point } from 'highcharts';
import { useErrorBoundary } from 'react-error-boundary';

import { useFilterLocalStorage } from './helpers';
import { TProductFilterTypeKeyof } from '../../types';
import { IProductsHomeViewControllerProps } from './ProductsHomeViewController.types';

import { TwoToneLoader } from '../../../../common';
import ProductsHomeView from './view/ProductsHomeView';

const ProductsHomeViewController = (
  props: IProductsHomeViewControllerProps,
) => {
  const { viewModel } = props;

  const { showBoundary } = useErrorBoundary();
  const navigate = useNavigate();

  const { setFilterValue, getFilterValue } = useFilterLocalStorage();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [chartData, setChartData] = useState<Array<SeriesOptionsType>>([]);
  const [filterData, setFilterData] = useState<TProductFilterTypeKeyof>(
    getFilterValue() || 'all',
  );

  const handleColumnClick = (factoryId: number, point: Point) =>
    navigate(`/details/${factoryId}/${point.index + 1}`);

  const getDataForChart = async (value: TProductFilterTypeKeyof) => {
    try {
      const response = await viewModel.getDataForChart(
        handleColumnClick,
        value,
      );

      setChartData(response);
    } catch (error) {
      showBoundary(error);
    } finally {
      setIsLoading(false);
    }
  };

  const changeFilter = (newValue: TProductFilterTypeKeyof) => {
    setFilterData(newValue);
    setFilterValue(newValue);

    getDataForChart(newValue);
  };

  useEffect(() => {
    getDataForChart(filterData);
  }, []);

  return (
    <>
      {!isLoading ? (
        <ProductsHomeView
          onSelectChange={(value) =>
            changeFilter(value as TProductFilterTypeKeyof)
          }
          selectedValue={filterData}
          chartData={chartData}
        />
      ) : (
        <TwoToneLoader />
      )}
    </>
  );
};

export default ProductsHomeViewController;
