import {
  ProductsRepository,
  ProductsDataSource,
} from 'src/modules/Products/data';
import { BaseHttpClient } from 'src/modules/HttpClient';
import { GetProductsDataCase } from 'src/modules/Products/domain';
import { productStorage } from 'src/modules/Products/data/datasource';
import { ProductsDetailsViewModel } from './ProductsDetailsViewModel';

import { ErrorBoundaryWrapper } from 'src/common';
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
  return (
    <ErrorBoundaryWrapper>
      <ProductsDetailsViewController viewModel={viewModel} />
    </ErrorBoundaryWrapper>
  );
};

export default ProductsDetailsProvider;
