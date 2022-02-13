import classNames from 'classnames';
import styles from './styles.module.scss';

const Button = ({ text, onClick, type = [] }) => {
  const types = type.map((item) => {
    return styles[`button--${item}`];
  });
  const className = classNames(styles.button, ...types);
  return (
    <button className={className} onClick={onClick} tabIndex={0}>
      {text}
    </button>
  );
};

export default Button;
