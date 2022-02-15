import { LandingLayout } from '../../shared/landing-layout';
import { SectionTitle } from '../../shared/section-title';
import { AdvantageImage } from '../../images'

import styles from './styles.module.scss';
import classNames from 'classnames';

export const LandingAdvantage = () => {
  return (
    <LandingLayout className={styles.layout}>
      <div className={styles.row}>
        <div className={classNames(styles.col, styles['col--info'])}>
          <SectionTitle className={classNames(styles.title)} text={'В DeFi все твои активы постоянно генерируют прибыль. Биткоин, эфир, стейблкойны - все это работает на тебя 24/7'} />
          <p className={styles.description}>“Если вы не найдете способ зарабатывать деньги, пока спите, вы будете работать, пока не умрете”</p>
          <p className={styles.author}>Уорен Баффет.</p>
        </div>
        <div className={styles.col}>
          <img src={AdvantageImage} alt="pic" className={styles.image} />
        </div>
      </div>
    </LandingLayout>
  )
}