import { Blurry } from './Blurry';
import { Logo } from './Logo';
import { Menu } from './Menu';
import { Nav } from './Nav/LaptopScreen';
import { SocialMedia } from './SocialMedia';
import styles from './style.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <Blurry />
      <Logo />
      <Nav />
      <SocialMedia />
      <Menu />
    </header>
  );
}
