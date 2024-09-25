import styles from './AnimatedInput.module.css';

export default function AnimatedInput() {
  return (
    <div className={styles['form_wrapper']}>
      <input type="text" placeholder=" " name='animated' className={styles['styledInput']} />
      <label className={styles['styledLabel']} htmlFor="animated">Enter your username</label>
    </div>
  );
}
