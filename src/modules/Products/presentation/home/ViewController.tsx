import { SeriesOptionsType } from 'highcharts';
import React, { useEffect, useState } from 'react';

import { PRODUCTS_FILTER_TYPE } from '../../types';
import { IProductsHomeViewControllerProps } from './ViewController.types';

import ProductsHomeView from './view/View';

const ProductsHomeViewController = (
  props: IProductsHomeViewControllerProps,
) => {
  const { viewModel } = props;

  const [chartData, setChartData] = useState<Array<SeriesOptionsType>>([]);
  const [filterData, setFilterData] =
    useState<keyof typeof PRODUCTS_FILTER_TYPE>('all');

  const getDataForChart = (value: keyof typeof PRODUCTS_FILTER_TYPE) =>
    viewModel
      .getDataForChart(() => console.log('hehehe'), value)
      .then((res) => setChartData(res));

  const changeFilter = (newValue: keyof typeof PRODUCTS_FILTER_TYPE) => {
    setFilterData(newValue);

    getDataForChart(newValue);
  };

  useEffect(() => {
    getDataForChart(filterData);
  }, []);

  return (
    <>
      {chartData.length ? (
        <ProductsHomeView
          onSelectChange={(value) =>
            changeFilter(value as keyof typeof PRODUCTS_FILTER_TYPE)
          }
          selectedValue={filterData}
          chartData={chartData}
        />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default ProductsHomeViewController;
