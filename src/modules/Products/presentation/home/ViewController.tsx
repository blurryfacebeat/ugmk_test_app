import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { SeriesOptionsType, Point } from 'highcharts';

import { PRODUCTS_FILTER_TYPE } from '../../types';
import { useFilterLocalStorage } from './helpers';
import { IProductsHomeViewControllerProps } from './ViewController.types';

import ProductsHomeView from './view/View';

const ProductsHomeViewController = (
  props: IProductsHomeViewControllerProps,
) => {
  const { viewModel } = props;

  const navigate = useNavigate();

  const { setFilterValue, getFilterValue } = useFilterLocalStorage();

  const [chartData, setChartData] = useState<Array<SeriesOptionsType>>([]);
  // TODO: ЕСЛИ СОХОРАНЕН ПРОДУКТ 2, ТО ИНОГДА ТРОИТ И ПОКАЗЫВАЕТ НЕ ТО ЗНАЧЕНИЕ
  const [filterData, setFilterData] = useState<
    keyof typeof PRODUCTS_FILTER_TYPE
  >(getFilterValue() || 'all');

  const handleColumnClick = (factoryId: number, point: Point) =>
    navigate(`/details/${factoryId}/${point.index + 1}`);

  const getDataForChart = (value: keyof typeof PRODUCTS_FILTER_TYPE) =>
    viewModel
      .getDataForChart(handleColumnClick, value)
      .then((res) => setChartData(res));

  const changeFilter = (newValue: keyof typeof PRODUCTS_FILTER_TYPE) => {
    setFilterData(newValue);
    setFilterValue(newValue);

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
