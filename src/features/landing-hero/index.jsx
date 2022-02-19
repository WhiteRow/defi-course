import { Link, animateScroll as scroll } from "react-scroll";
import classNames from 'classnames';

import { HeroImage } from '../../images'
import { LandingLayout } from "../../shared/landing-layout";
import { BuyButton } from '../../shared/button';

import styles from './styles.module.scss';

export const LandingHero = () => {
  return (
    <LandingLayout className={styles.layout}>
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
            <Link
              activeClass="active"
              to="checkout"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              >
              <BuyButton />
            </Link>
            <p className={styles['actions__text']}>Успей до 18 марта</p>
          </div>
        </div>
        <div className={styles.col}>
          <img src={HeroImage} alt="" className={styles.image} />
        </div>
      </div>
    </LandingLayout>
  );
}
