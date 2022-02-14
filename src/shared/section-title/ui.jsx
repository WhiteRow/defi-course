import classNames from 'classnames';
import IconLine from '../../icons/IconLine';
import IconLineDouble from '../../icons/IconLineDouble';
import styles from './styles.module.scss';

export const View = ({ text, className, icon = 'solid' }) => {
  return (
    <div className={classNames(styles.title, className)}>
      <div className={styles.line}>
        {icon === 'double' ? (<IconLineDouble />) : (<IconLine />)}
      </div>
      <h2 className={styles['title__text']}>{text}</h2>
    </div>
  );
};
