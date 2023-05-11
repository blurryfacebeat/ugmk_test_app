import React, { useEffect } from 'react';

import { BaseHttpClient } from './modules/HttpClient';
import { ProductsRepository } from './modules/Products/data/repository';
import { ProductDataSource } from './modules/Products/data/datasource/products';
import { productStorage } from './modules/Products/data/datasource/storage/products';
import { GetProductsDataCase } from './modules/Products/domain/GetProductsDataCase/GetProductsDataCase';

import { AppRoutes } from './router';

import styles from './App.module.scss';

const getProductsDataCase = new GetProductsDataCase(
  new ProductsRepository(new ProductDataSource(BaseHttpClient, productStorage)),
);

function App() {
  useEffect(() => {
    getProductsDataCase.get().then((res) => console.log(321, res));
  }, []);

  return (
    <div className={styles.app}>
      <AppRoutes />
    </div>
  );
}

export default App;
