import { LandingLayout } from '../../shared/landing-layout';
import { SectionTitle } from '../../shared/section-title';
import { Card } from './Card';

import { cardsList } from './config';

import styles from './styles.module.scss';

export const LandingLearn = () => {
  return (
    <LandingLayout>
      <SectionTitle text={'За 14 дней ты'} className={styles.title} />
      <div className={styles.row}>
        {cardsList.map((card, index) => {
          return (
            <div className={styles.col} key={`landing_learn_col_${index}`}>
              <Card icon={card.icon} title={card.title} />
            </div>
          )
        })}
      </div>
    </LandingLayout>
  );
};
