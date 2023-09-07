import { phone } from '../../utils/contact';
import styles from './style.module.css';
import { BsWhatsapp } from 'react-icons/bs';

export const link = `https://api.whatsapp.com/send?phone=${phone}&text=Ol%C3%A1!`;

export const Icon = BsWhatsapp;

export function WhatsappButton() {
  return (
    <a
      target='_blank'
      aria-label='Conversar com academia no WhatsApp'
      href={link}
      className={styles.btn}
      rel='noreferrer'
    >
      <Icon />
    </a>
  );
}
