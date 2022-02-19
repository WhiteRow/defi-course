import classNames from 'classnames';
import styles from './styles.module.scss';

export const View = ({ children, className, optionalType }) => {
  return (
    <section className={classNames(styles.section, className)}>
      <div
        className={classNames(
          styles.container,
          optionalType && styles['container--gutter-optional']
        )}
      >
        {children}
      </div>
    </section>
  );
};
