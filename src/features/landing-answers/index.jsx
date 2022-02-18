import classNames from 'classnames';
import { AnswersImage } from '../../images';
import { answers } from './config';

import { LandingLayout } from '../../shared/landing-layout';
import { SectionTitle } from '../../shared/section-title';
import { Dropdown } from './Dropdown';

import styles from './styles.module.scss';

export const LandingAnswers = () => {
  return (
    <LandingLayout className={styles.layout}>
      <div className={styles.row}>
        <div className={classNames(styles.col, styles['col--image'])}>
          <img src={AnswersImage} alt="pic" className={styles.image} />
        </div>
        <div className={classNames(styles.col, styles['col--info'])}>
          <SectionTitle text="Ответы на популярные вопросы" className={styles.title} />
          <div className={styles.box}>
            {answers.map((item, index) => (
              <Dropdown title={item.title} text={item.text} key={`landing_answers_dropdown_${index}`} />
            ))}
          </div>
        </div>
      </div>
    </LandingLayout>
  )
}