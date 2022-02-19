import Button from './ui';
import TelegramIcon from '../../icons/IconTelegram';

const openCheckoutModal = () => {
  const modal = document.querySelector('.modal');
  modal.classList.remove('modal--hidden');
}

export const BuyButton = () => <Button text="Предзаказ" onClick={openCheckoutModal} />;
export const HelpButton = () => (
  <Button text="Написать" type={['secondary', 'small', 'iconed']} icon={TelegramIcon}/>
);
