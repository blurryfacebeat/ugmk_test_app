import React from 'react';

import { GetProductsDataCase } from '../../domain';
import { BaseHttpClient } from '../../../HttpClient';
import { productStorage } from '../../data/datasource';
import { ProductsRepository, ProductsDataSource } from '../../data';
import { ProductsDetailsViewModel } from './ProductsDetailsViewModel';

import ProductsDetailsViewController from './ProductsDetailsViewController';

const viewModel = new ProductsDetailsViewModel({
  cases: {
    getProductsDataCase: new GetProductsDataCase(
      new ProductsRepository(
        new ProductsDataSource(BaseHttpClient, productStorage),
      ),
    ),
  },
});

const ProductsDetailsProvider = () => {
  return <ProductsDetailsViewController viewModel={viewModel} />;
};

export default ProductsDetailsProvider;
