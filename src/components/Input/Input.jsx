import { forwardRef } from 'react';
import classNames from 'classnames';
import styles from './Input.module.css';

const Input = forwardRef(function Input({ isValid, appearence = 'text', className, ...props }, ref) {
  return (
    <input ref={ref} className={classNames(className, {
      [styles['invalid']]: isValid,
      [styles['input-title']]: appearence == 'title',
      [styles['input']]: appearence == 'text'
    })} {...props} />
  );
});

export default Input;