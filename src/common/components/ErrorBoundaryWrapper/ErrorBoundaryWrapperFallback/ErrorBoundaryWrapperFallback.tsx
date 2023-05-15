import React from 'react';
import { useErrorBoundary } from 'react-error-boundary';

import { IErrorBoundaryWrapperFallbackProps } from './ErrorBoundaryWrapperFallback.types';

import styles from './ErrorBoundaryWrapperFallback.module.scss';
import { BaseButton } from '../../BaseButton';

const ErrorBoundaryWrapperFallback = (
  props: IErrorBoundaryWrapperFallbackProps,
) => {
  const { error } = props;

  const { resetBoundary } = useErrorBoundary();

  return (
    <div className={styles.container}>
      <p>{`Ошибка: ${error?.message}`}</p>
      <BaseButton text={'Попробовать заново'} onClick={resetBoundary} />
    </div>
  );
};

export default ErrorBoundaryWrapperFallback;
