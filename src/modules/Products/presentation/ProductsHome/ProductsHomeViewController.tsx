import { useEffect } from 'react';
import { Point } from 'highcharts';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import { useErrorBoundary } from 'react-error-boundary';

import { TProductFilterTypeKeyof } from 'src/modules/Products/types';
import { IProductsHomeViewControllerProps } from './ProductsHomeViewController.types';

import { TwoToneLoader } from 'src/common';
import ProductsHomeView from './view/ProductsHomeView';

const ProductsHomeViewController = (
  props: IProductsHomeViewControllerProps,
) => {
  const { viewModel } = props;

  const { showBoundary } = useErrorBoundary();
  const navigate = useNavigate();

  const handleColumnClick = (factoryId: number, point: Point) =>
    navigate(`/details/${factoryId}/${point.index + 1}`);

  const getDataForChart = async () => {
    try {
      await viewModel.fetchDataForChart(handleColumnClick);
    } catch (error) {
      showBoundary(error);
    }
  };

  const changeFilter = (newValue: TProductFilterTypeKeyof) => {
    viewModel.changeFilter(newValue);

    getDataForChart();
  };

  useEffect(() => {
    getDataForChart();
  }, []);

  return (
    <>
      {!viewModel.isLoading ? (
        <ProductsHomeView
          onSelectChange={(value) =>
            changeFilter(value as TProductFilterTypeKeyof)
          }
          selectedValue={viewModel.filterData}
          chartData={viewModel.chartData}
        />
      ) : (
        <TwoToneLoader />
      )}
    </>
  );
};

export default observer(ProductsHomeViewController);
