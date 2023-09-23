import { useState, useCallback } from 'react';
import Button from '../Button/Button';
import SelectUser from '../SelectUser/SelectUser';
import Logo from '../Logo/Logo';

const logos = ['/logo.svg', '/vite.svg'];

function Header() {
  const [logoIndex, setLogoIndex] = useState(0);

  console.log('Header');

  const toggleLogos = useCallback(() => {
    setLogoIndex(state => Number(!state));
    console.log(logoIndex);
  }, [logoIndex]);

  return (
    <>
      <Logo image={logos[logoIndex]}/>
      <SelectUser/>
      <Button onClick={toggleLogos}>Сменить лого</Button>
    </>
  );
}

export default Header;