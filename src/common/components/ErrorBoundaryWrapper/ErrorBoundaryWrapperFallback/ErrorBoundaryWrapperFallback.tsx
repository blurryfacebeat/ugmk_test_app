import React from 'react';
import { useErrorBoundary } from 'react-error-boundary';

import { IErrorBoundaryWrapperFallbackProps } from './ErrorBoundaryWrapperFallback.types';

const ErrorBoundaryWrapperFallback = (
  props: IErrorBoundaryWrapperFallbackProps,
) => {
  const { error } = props;

  const { resetBoundary } = useErrorBoundary();

  return (
    <div>
      <p>{`Ошибка: ${error?.message}`}</p>
      <button onClick={resetBoundary}>Попробовать заново</button>
    </div>
  );
};

export default ErrorBoundaryWrapperFallback;
