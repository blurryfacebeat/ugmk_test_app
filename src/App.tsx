import React from 'react';

import { AppRoutes } from './router';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <AppRoutes />
    </div>
  );
}

export default App;
