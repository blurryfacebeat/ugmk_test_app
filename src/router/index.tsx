import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { HomePage } from '../pages';

const NotFoundPage = lazy(
  () =>
    import(
      /* webpackChunkName: "NotFoundPage" */ '../pages/NotFoundPage/NotFoundPage'
    ),
);

const FactoryDetailsPage = lazy(
  () =>
    import(
      /* webpackChunkName: "ProductsDetailsPage" */ '../pages/ProductsDetailsPage/FactoryDetailsPage'
    ),
);

export const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<div>...</div>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route
            path='/details/:factoryId/:monthId'
            element={<FactoryDetailsPage />}
          />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};
