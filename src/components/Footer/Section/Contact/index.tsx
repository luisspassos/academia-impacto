import { Base } from '../Base';
import { Item } from './Item';
import {
  Icon as WhatsappIcon,
  link as whatsappLink,
} from '../../../WhatsappButton';
import { BsTelephone } from 'react-icons/bs';
import { phone } from '../../../../utils/contact';
import styles from './style.module.scss';

export function Contact() {
  return (
    <Base title='Contato'>
      <address className={styles.css}>
        <Item target='_blank' Icon={WhatsappIcon} href={whatsappLink} />
        <Item Icon={BsTelephone} href={`tel:${phone}`} />
      </address>
    </Base>
  );
}
