import { ErrorBoundary } from 'react-error-boundary';

import { IErrorBoundaryWrapperProps } from './ErrorBoundaryWrapper.types';

import { ErrorBoundaryWrapperFallback } from './ErrorBoundaryWrapperFallback';

const ErrorBoundaryWrapper = (props: IErrorBoundaryWrapperProps) => {
  const { children } = props;

  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryWrapperFallback}>
      {children}
    </ErrorBoundary>
  );
};

export default ErrorBoundaryWrapper;
