import classNames from 'classnames';
import { HeroImage } from '../../images'
import LandingLayout from "../../shared/landing-layout";
import styles from './styles.module.scss';

function LandingHero() {
  return (
    <LandingLayout>
      <div className={styles.row}>
        <div className={classNames(styles.col, styles['col--info'])}>
          <h1 className={styles.title}>
            Начни зарабатывать в DeFi за
            <span className={styles['title__highlight']}> 14 дней</span>
          </h1>
          <p className={styles.description}>
            Не упусти свой шанс заработать на революции финансовой системы
          </p>
          <div className={styles.actions}>

          </div>
        </div>
        <div className={styles.col}>
          <img src={HeroImage} alt="pic" className={styles.image} />
        </div>
      </div>
    </LandingLayout>
  );
}

export default LandingHero;
