import React from 'react';

import { ProductsViewModel } from './ViewModel';
import { BaseHttpClient } from '../../../HttpClient';
import { ProductsRepository } from '../../data/repository';
import { ProductDataSource } from '../../data/datasource/products';
import { productStorage } from '../../data/datasource/storage/products';
import { GetProductsDataCase } from '../../domain/GetProductsDataCase/GetProductsDataCase';

import { ProductsHomeViewController } from './index';

const viewModel = new ProductsViewModel({
  cases: {
    getProductsDataCase: new GetProductsDataCase(
      new ProductsRepository(
        new ProductDataSource(BaseHttpClient, productStorage),
      ),
    ),
  },
});

const ProductsHomeProvider = () => {
  return <ProductsHomeViewController viewModel={viewModel} />;
};

export default ProductsHomeProvider;
