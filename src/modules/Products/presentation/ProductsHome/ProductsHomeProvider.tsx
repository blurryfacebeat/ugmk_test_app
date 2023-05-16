import {
  ProductsRepository,
  ProductsDataSource,
} from 'src/modules/Products/data';
import { BaseHttpClient } from 'src/modules/HttpClient';
import { ProductsHomeViewModel } from './ProductsHomeViewModel';
import { GetProductsDataCase } from 'src/modules/Products/domain';
import { productStorage } from 'src/modules/Products/data/datasource';

import { ErrorBoundaryWrapper } from 'src/common';
import { ProductsHomeViewController } from './index';

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
