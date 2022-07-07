import classNames from 'classnames';

import { LandingLayout } from '../../shared/landing-layout';
import { SectionTitle } from '../../shared/section-title';
import { BuyButton } from '../../shared/button';
// import IconClock from '../../icons/IconClock';
import IconRuble from '../../icons/IconRuble';

import styles from './styles.module.scss';

export const LandingCheckout = () => {
  const tariffs = [
    {
      type: 'Базовый',
      info: [
        'Пожизненный доступ к материалам курса',
      ],
      price: '24 900',
      modal: 'base',
    },
    {
      type: 'Продвинутый',
      info: [
        'Пожизненный доступ к материалам курса',
        'Доступ в закрытую группу в Telegram',
        'Поддержка на 14 дней с момента покупки курса',
      ],
      price: '37 900',
      modal: 'advanced',
    },
    {
      type: 'Максимальный',
      info: [
        'Пожизненный доступ к материалам курса',
        'Доступ в закрытую группу в Telegram',
        'Поддержка на 60 дней с момента покупки курса',
        'Уникальный NFT от CryptoInside',
        'Пожизненный доступ в Discord сообщество CryptoInside',
        'Доступ к 4 прямым трансляциям по DeFi',
        'Пожизненная Скидка в 30% на все продукты CryptoInside',
      ],
      price: '84 900',
      modal: 'max',
    },
  ]

  return (
    <LandingLayout className={styles.layout}>
      <SectionTitle
        className={styles.title}
        text={'Начни зарабатывать в DeFi за 14 дней'}
        icon={'double'}
      />
      <p className={styles.subtitle}>Стоимость курса</p>
      <div className={styles.row} name="checkout">
        {tariffs.map((item) => {
          return (
            <div
              key={`checkout_item_${item.type}`} 
              className={classNames(styles.col, styles['col--buy'])}
            >
              <div className={styles.buy}>
                {/* <p className={styles['buy__subtitle']}>
                  Идет набор на третий поток
                </p> */}
                <div className={styles.label}>{item.type}</div>
                {/* <div className={styles['buy__old-price']}>
                  <div className={styles.buy__text}>35 000</div>
                  <IconRuble className={styles.buy__icon} />
                </div> */}
                <div className={styles['buy__price']}>
                  <div className={styles.buy__text}>{item.price}</div>
                  <IconRuble className={styles.buy__icon} />
                </div>
                <div className={classNames(styles.col, styles['col--info'])}>
                  <div className={styles.info}>
                    {/* <div className={styles['info__title']}>Что вы получите</div> */}
                    <ul className={styles.list}>
                      {item.info.map((text, index) => {
                        return (
                          <li 
                            className={styles['list__item']}
                            key={`checkout_item_${item.type}_text_${index}`} 
                          >
                            {text}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
                <BuyButton modal={item.modal} />
                {/* <div className={styles.time}>
                  <IconClock className={styles['time__icon']} />
                  <div className={styles['time__text']}>
                    Доступ к материалам откроется 6 июня
                  </div>
                </div> */}
              </div>
            </div>
          )
        })}
      </div>
    </LandingLayout>
  );
};
