import React from 'react';

import { GetProductsDataCase } from '../../domain';
import { BaseHttpClient } from '../../../HttpClient';
import { productStorage } from '../../data/datasource';
import { ProductsHomeViewModel } from './ProductsHomeViewModel';
import { ProductsRepository, ProductsDataSource } from '../../data';

import { ProductsHomeViewController } from './index';
import { ErrorBoundaryWrapper } from '../../../../common';

const viewModel = new ProductsHomeViewModel({
  cases: {
    getProductsDataCase: new GetProductsDataCase(
      new ProductsRepository(
        new ProductsDataSource(BaseHttpClient, productStorage),
      ),
    ),
  },
});

const ProductsHomeProvider = () => {
  return (
    <ErrorBoundaryWrapper>
      <ProductsHomeViewController viewModel={viewModel} />
    </ErrorBoundaryWrapper>
  );
};

export default ProductsHomeProvider;
