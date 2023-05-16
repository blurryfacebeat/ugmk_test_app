import { DefaultError } from 'src/common';

class ProductsNotLoadedException extends DefaultError {}

export const throwProductsNotLoaded = () => {
  throw new ProductsNotLoadedException(
    'Произошла ошибка при загрузке продуктов',
  );
};
