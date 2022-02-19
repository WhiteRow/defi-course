import { socials } from '../../shared/config'

import Button from './ui';
import TelegramIcon from '../../icons/IconTelegram';

const openCheckoutModal = () => {
  const modal = document.querySelector('.modal');
  const body = document.body;
  modal.classList.remove('modal--hidden');
  body.style.overflow = 'hidden';
}

const openHelp = () => {
  window.location.href = socials[1].link;
}

export const BuyButton = () => <Button text="Предзаказ" onClick={openCheckoutModal} />;
export const HelpButton = () => (
  <Button text="Написать" type={['secondary', 'small', 'iconed']} icon={TelegramIcon} onClick={openHelp}/>
);
