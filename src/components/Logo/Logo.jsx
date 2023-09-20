import { memo } from 'react';
import styles from './Logo.module.css';

// eslint-disable-next-line react-refresh/only-export-components
function Logo({ image }) {
  console.log('Logo');

  return <img className={styles.logo} src={image} alt="Логотип журнала" />;
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(Logo);