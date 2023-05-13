import React from 'react';

import { BaseHttpClient } from '../../../HttpClient';
import { ProductsDetailsViewModel } from './ViewModel';
import { ProductsRepository } from '../../data/repository';
import { ProductDataSource } from '../../data/datasource/products';
import { productStorage } from '../../data/datasource/storage/products';
import { GetProductsDataCase } from '../../domain/GetProductsDataCase/GetProductsDataCase';

import ProductsDetailsViewController from './ViewController';

const viewModel = new ProductsDetailsViewModel({
  cases: {
    getProductsDataCase: new GetProductsDataCase(
      new ProductsRepository(
        new ProductDataSource(BaseHttpClient, productStorage),
      ),
    ),
  },
});

const ProductsDetailsProvider = () => {
  return <ProductsDetailsViewController viewModel={viewModel} />;
};

export default ProductsDetailsProvider;
