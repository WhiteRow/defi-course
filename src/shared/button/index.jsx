import { socials } from '../../shared/config';

import Button from './ui';
import TelegramIcon from '../../icons/IconTelegram';

const buyButtonHandler = (handler, modal) => {
  if (handler) handler()
  if (modal) openCheckoutModal(modal)
}

const openCheckoutModal = (modalName) => {
  const modal = document.querySelector(`.modal--${modalName}`);
  const body = document.body;
  modal.classList.remove('modal--hidden');
  body.style.overflow = 'hidden';
};

const openHelp = () => {
  window.location.href = socials[1].link;
};

export const BuyButton = ({ handler, modal }) => (
  <Button text={'Купить'} onClick={() => buyButtonHandler(handler, modal)} />
);
export const HelpButton = () => (
  <Button
    text="Написать"
    type={['secondary', 'small', 'iconed']}
    icon={TelegramIcon}
    onClick={openHelp}
  />
);
