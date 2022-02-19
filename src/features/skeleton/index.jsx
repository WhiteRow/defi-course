// import classNames from 'classnames';

import { LandingLayout } from '../../shared/landing-layout';

import styles from './styles.module.scss';

export const Skeleton = () => {
  return (
    <LandingLayout className={styles.layout}>
      {/* <div className={styles.row}>
        <div className={classNames(styles.col, styles['col--info'])}>
          <div className={styles.title}></div>
          <div className={styles.description}></div>
          <div className={styles.button}></div>
        </div>
        <div className={styles.col}>
          <div className={styles.image}></div>
        </div>
      </div> */}
    </LandingLayout>
  );
};
