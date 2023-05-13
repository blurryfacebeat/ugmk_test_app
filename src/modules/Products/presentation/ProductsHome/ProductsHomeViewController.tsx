import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { SeriesOptionsType, Point } from 'highcharts';

import { useFilterLocalStorage } from './helpers';
import { TProductFilterTypeKeyof } from '../../types';
import { IProductsHomeViewControllerProps } from './ProductsHomeViewController.types';

import ProductsHomeView from './view/ProductsHomeView';

const ProductsHomeViewController = (
  props: IProductsHomeViewControllerProps,
) => {
  const { viewModel } = props;

  const navigate = useNavigate();

  const { setFilterValue, getFilterValue } = useFilterLocalStorage();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [chartData, setChartData] = useState<Array<SeriesOptionsType>>([]);
  // TODO: ЕСЛИ СОХОРАНЕН ПРОДУКТ 2, ТО ИНОГДА ТРОИТ И ПОКАЗЫВАЕТ НЕ ТО ЗНАЧЕНИЕ
  const [filterData, setFilterData] = useState<TProductFilterTypeKeyof>(
    getFilterValue() || 'all',
  );

  const handleColumnClick = (factoryId: number, point: Point) =>
    navigate(`/details/${factoryId}/${point.index + 1}`);

  const getDataForChart = (value: TProductFilterTypeKeyof) =>
    viewModel
      .getDataForChart(handleColumnClick, value)
      .then((res) => setChartData(res))
      .finally(() => {
        setIsLoading(false);
      });

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
        <div>Loading...</div>
      )}
    </>
  );
};

export default ProductsHomeViewController;