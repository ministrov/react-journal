import SelectUser from '../SelectUser/SelectUser';
import Logo from '../Logo/Logo';
import styles from './Header.module.css';

const logos = ['/logo.svg', '/vite.svg'];

function Header() {
  return (
    <header className={styles['header']}>
      <Logo image={logos[0]} />
      <SelectUser />
    </header>
  );
}

export default Header;