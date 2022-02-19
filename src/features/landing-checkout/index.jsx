import classNames from 'classnames';

import { LandingLayout } from '../../shared/landing-layout';
import { SectionTitle } from '../../shared/section-title';
import { BuyButton } from '../../shared/button';
import IconClock from '../../icons/IconClock';
import IconRuble from '../../icons/IconRuble';

import styles from './styles.module.scss';

export const LandingCheckout = () => {
  return (
    <LandingLayout className={styles.layout}>
      <SectionTitle
        className={styles.title}
        text={'Начни зарабатывать в DeFi за 14 дней'}
        icon={'double'}
      />
      <p className={styles.subtitle}>Стоимость курса</p>
      <div className={styles.row}>
        <div className={classNames(styles.col, styles['col--buy'])}>
          <div className={styles.buy}>
            <p className={styles['buy__subtitle']}>
              Скидка будет действовать до 14 марта 2022 г.
            </p>
            <div className={styles['buy__old-price']}>
              35 000
              <IconRuble className={styles.buy__icon} />
            </div>
            <div className={styles['buy__price']}>
              16 490
              <IconRuble className={styles.buy__icon} />
            </div>
            <BuyButton />
            <div className={styles.time}>
              <IconClock className={styles['time__icon']} />
              <div className={styles['time__text']}>
                Доступ к материалам откроется 14 марта
              </div>
            </div>
          </div>
        </div>
        <div className={classNames(styles.col, styles['col--info'])}>
          <div className={styles.info}>
            <div className={styles.label}>Максимальный</div>
            <div className={styles['info__title']}>Что вы получите</div>
            <ul className={styles.list}>
              <li className={styles['list__item']}>
                Пожизненный доступ ко всем обучающим материалам
              </li>
              <li className={styles['list__item']}>
                Постоянная поддержка от автора курса
              </li>
              <li className={styles['list__item']}>
                NFT - сертификат с уникальным секретным бонусом
              </li>
              <li className={styles['list__item']}>
                Уникальные стратегии заработка в DeFi от CryptoInside
              </li>
              <li className={styles['list__item']}>
                Доступ ко всем будущим обновлениям курса
              </li>
            </ul>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
};
