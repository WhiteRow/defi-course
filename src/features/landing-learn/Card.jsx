import styles from './styles.module.scss';
export const Card = ({ icon, title }) => {
  return (
    <div className={styles.card}>
      {icon()}
      <h3 className={styles['card__title']}>{title}</h3>
    </div>
  );
};
