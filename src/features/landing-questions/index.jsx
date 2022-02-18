import classNames from 'classnames';
import { QuestionImage } from '../../images';

import { LandingLayout } from '../../shared/landing-layout';
import { SectionTitle } from '../../shared/section-title';
import { HelpButton } from '../../shared/button';

import styles from './styles.module.scss';

export const LandingQuestion = () => {
  return (
    <LandingLayout className={styles.layout}>
      <div className={styles.row}>
        <div className={classNames(styles.col, styles['col--info'])}>
          <SectionTitle text={'Остались вопросы?'} className={styles.title} />
          <p className={styles.description}>
            Если у вас остались вопросы, вы можете написать в телеграм
          </p>
          <HelpButton />
        </div>
        <div className={styles.col}>
          <img src={QuestionImage} alt="pic" className={styles.image} />
        </div>
      </div>
    </LandingLayout>
  );
};
