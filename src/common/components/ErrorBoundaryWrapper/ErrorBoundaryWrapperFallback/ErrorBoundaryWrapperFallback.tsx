import { useErrorBoundary } from 'react-error-boundary';
import { useNavigate, useLocation } from 'react-router-dom';

import { IErrorBoundaryWrapperFallbackProps } from './ErrorBoundaryWrapperFallback.types';

import { BaseButton } from '../../BaseButton';

import styles from './ErrorBoundaryWrapperFallback.module.scss';

const ErrorBoundaryWrapperFallback = (
  props: IErrorBoundaryWrapperFallbackProps,
) => {
  const { error } = props;

  const navigate = useNavigate();
  const location = useLocation();
  const { resetBoundary } = useErrorBoundary();

  const routeToHome = () => navigate('/');

  return (
    <div className={styles.container}>
      <p>{`Ошибка: ${error?.message}`}</p>
      <BaseButton text={'Попробовать заново'} onClick={resetBoundary} />
      {location.pathname !== '/' && (
        <BaseButton text={'На главную'} onClick={routeToHome} />
      )}
    </div>
  );
};

export default ErrorBoundaryWrapperFallback;
