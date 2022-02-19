import classNames from 'classnames';
import { docs, socials } from '../../shared/config';

import { LandingLayout } from '../../shared/landing-layout';
import IconLogo from '../../icons/IconLogo';

import styles from './styles.module.scss';

export const Footer = () => {
  return (
    <LandingLayout className={styles.layout}>
      <div className={styles.row}>
        <div className={styles.col}>
          <IconLogo />
        </div>
        <div className={classNames(styles.col, styles['col--links'])}>
          {docs.map((doc, index) => (
            <a
              key={`footer_link_${index}`}
              href={doc.link}
              target="_blank"
              tabIndex="0"
              className={styles.link}
              rel="noreferrer"
            >
              {doc.name}
            </a>
          ))}
        </div>
        <div className={classNames(styles.col, styles['col--contacts'])}>
          <a
            href="mailto:support@cryptoinside.tech"
            target="_blank"
            tabIndex="0"
            className={classNames(styles.link, styles.email)}
            rel="noreferrer"
          >
            support@cryptoinside.tech
          </a>
          <div className={styles.socials}>
            {socials.map((social, index) => (
              <a
                key={`footer_social_link_${index}`}
                href={social.link}
                rel="noreferrer"
                target="_blank"
                className={styles.socials__item}
              >
                {social.icon()}
              </a>
            ))}
          </div>
        </div>
        <div className={classNames(styles.col, styles['col--inn'])}>
          <p className={styles.inn}>ИП: Шашков Иван Михайлович</p>
          <p className={styles.inn}>ИНН: 772350988666</p>
          <p className={styles.inn}>ОГРНИП: 320774600511931</p>
        </div>
      </div>
    </LandingLayout>
  );
};
