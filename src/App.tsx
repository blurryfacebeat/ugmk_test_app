import React, { useEffect } from 'react';

import { BaseHttpClient } from './modules/HttpClient';
import { ProductsRepository } from './modules/Products/data/repository';

import { AppRoutes } from './routes';

import styles from './App.module.scss';
import { ProductsCases } from './modules/Products/domain/ProductsCases';

const productsCases = new ProductsCases(new ProductsRepository(BaseHttpClient));

function App() {
  useEffect(() => {
    productsCases.getData();
  }, []);

  return (
    <div className={styles.app}>
      <AppRoutes />
    </div>
  );
}

export default App;
