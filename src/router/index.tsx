import React, { lazy, Suspense } from 'react';
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
      /* webpackChunkName: "FactoryDetailsPage" */ '../pages/FactoryDetailsPage/FactoryDetailsPage'
    ),
);

export const AppRoutes = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
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
