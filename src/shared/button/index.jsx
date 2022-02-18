import Button from './ui';
import TelegramIcon from '../../icons/IconTelegram';

export const BuyButton = () => <Button text="Предзаказ" />;
export const HelpButton = () => (
  <Button text="Написать" type={['secondary', 'small', 'iconed']} icon={TelegramIcon}/>
);
