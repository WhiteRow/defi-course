import classNames from 'classnames';
import styles from './styles.module.scss';

export const View = ({ children, className }) => {
  return (
    <section className={classNames(styles.section, className)}>
      <div className={styles.container}>{children}</div>
    </section>
  );
};
