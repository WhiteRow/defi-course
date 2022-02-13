import styles from './styles.module.scss';

export const LandingLayout = ({ children }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>{children}</div>
    </section>
  );
};
