import { forwardRef } from 'react';
import classNames from 'classnames';
import styles from './Input.module.css';

const Input = forwardRef(function Input({ isValid = true, appearence = 'text', className, ...props }, ref) {
  return (
    <input {...props} ref={ref} className={classNames(className, [styles['input']], {
      [styles['invalid']]: !isValid,
      [styles['input-title']]: appearence == 'title'
    })} />
  );
});

export default Input;