import { useState } from 'react';
import styles from './Checbox.module.css';

export default function Checkbox({ typeName, labelName }) {
  const [ checked, setChecked] = useState(false);

  const onChangeHandler = (e) => {
    console.log(e.target.checked);
    // Or setChecked(e.target.checked);
    setChecked((prevState) => !prevState);  
  };
  return (
    <div className={styles['checkbox']}>
      <label htmlFor={typeName}>{labelName}</label>
      <input type="checkbox" name={typeName} checked={checked} onChange={onChangeHandler}/>
    </div>
  );
}

