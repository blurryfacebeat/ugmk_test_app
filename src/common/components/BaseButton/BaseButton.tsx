import { IBaseButtonProps } from './BaseButton.types';

import styles from './BaseButton.module.scss';

const BaseButton = (props: IBaseButtonProps) => {
  const { text, ...otherProps } = props;

  return (
    <button className={styles.button} type='button' {...otherProps}>
      {text}
    </button>
  );
};

export default BaseButton;
