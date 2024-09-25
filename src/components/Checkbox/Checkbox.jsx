import styles from './Checbox.module.css';

export default function Checkbox({ typeName, labelName }) {
  return (
    <div className={styles['checkbox']}>
      <label htmlFor={typeName}>{labelName}</label>
      <input type="checkbox" name={typeName} />
    </div>
  );
}

