import React from 'react';

import { AppRoutes } from './routes';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <AppRoutes />
    </div>
  );
}

export default App;
