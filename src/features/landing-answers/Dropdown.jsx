import { useState } from 'react';
import classNames from 'classnames';

import styles from './styles.module.scss';

export const Dropdown = ({title, text}) => {
  const [open, setOpen] = useState(false)

  return (
    <div className={classNames(styles.dropdown, open && styles['dropdown--active'])}>
      <div className={styles.dropdown__head} onClick={() => setOpen(!open)}>
        <h3 className={styles.dropdown__title}>{title}</h3>
        <button className={styles.dropdown__toggle}></button>
      </div>
      <p className={styles.dropdown__content}>
        {text}
      </p>
    </div>
  )
}