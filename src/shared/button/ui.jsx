import classNames from 'classnames';

import styles from './styles.module.scss';

const Button = ({ text, onClick, type = [], icon }) => {
  const types = type.map((item) => {
    return styles[`button--${item}`];
  });
  const className = classNames(styles.button, ...types);
  return (
    <button className={className} onClick={onClick} tabIndex={0}>
      <span className={styles.text}>{text}</span>
      {icon && (
        icon()
      )}
    </button>
  );
};

export default Button;
