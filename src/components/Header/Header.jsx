import SelectUser from '../SelectUser/SelectUser';
import CityPicker from '../CityPicker/CityPicker';
import Logo from '../Logo/Logo';
import styles from './Header.module.css';

const logos = ['/logo.svg', '/vite.svg'];

function Header() {
  return (
    <header className={styles['header']}>
      <div className={styles['header__left-side']}>
        <Logo image={logos[0]} />
        <CityPicker />
      </div>
      <SelectUser />
    </header>
  );
}

export default Header;