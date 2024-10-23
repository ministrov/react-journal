import { useEffect } from 'react';
import styles from './Button.module.css';

function Button({ children, onClick }) {
  // useEffect(() => {
  //   window.addEventListener('click', (e) => {
  //     if (e.target) {
  //       console.log('click');
  //     }
  //   });
  //   // if (onClick) {
  //   //   console.log('click');
  //   // }
  // }, []);

  return (
    <button className={`${styles['button']} ${styles['accent']}`} onClick={onClick}>{children}</button>
  );
}

export default Button;