import { GetProductsDataCase } from '../../domain';
import { BaseHttpClient } from '../../../HttpClient';
import { productStorage } from '../../data/datasource';
import { ProductsRepository, ProductsDataSource } from '../../data';
import { ProductsDetailsViewModel } from './ProductsDetailsViewModel';

import { ErrorBoundaryWrapper } from '../../../../common';
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
