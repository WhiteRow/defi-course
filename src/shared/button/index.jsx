import { socials } from '../../shared/config';

import Button from './ui';
import TelegramIcon from '../../icons/IconTelegram';

const checkoutContent = () => {
  const nowDate = new Date().getDate();
  const nowMonth = new Date().getMonth();

  if (nowDate === 24 && nowMonth === 3) {
    return 'Купить';
  } else {
    return 'Предзаказ';
  }
};

const openCheckoutModal = () => {
  const modal = document.querySelector('.modal');
  const body = document.body;
  modal.classList.remove('modal--hidden');
  body.style.overflow = 'hidden';
};

const openHelp = () => {
  window.location.href = socials[1].link;
};

export const BuyButton = ({ handler }) => (
  <Button text={checkoutContent()} onClick={handler && openCheckoutModal} />
);
export const HelpButton = () => (
  <Button
    text="Написать"
    type={['secondary', 'small', 'iconed']}
    icon={TelegramIcon}
    onClick={openHelp}
  />
);
