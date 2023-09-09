import { useState } from 'react';
import classNames from 'classnames';
import Button from '../Button/Button';
import styles from './JournalForm.module.css';

function JournalForm({ onSubmit }) {
  const [formValidState, setFormValidState] = useState({
    title: true,
    text: true,
    date: true
  });

  const addJournalItem = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    let isFormValid = true;

    // Form data validation

    if (!formProps.title?.trim().length) {
      setFormValidState(state => ({ ...state, title: false}));
      // eslint-disable-next-line no-unused-vars
      isFormValid = false;
    } else {
      setFormValidState(state => ({ ...state, title: true }));
    }

    if (!formProps.text?.trim().length) {
      setFormValidState(state => ({ ...state, text: false }));
      // eslint-disable-next-line no-unused-vars
      isFormValid = false;
    } else {
      setFormValidState(state => ({ ...state, text: true }));
    }

    if (!formProps.date) {
      setFormValidState(state => ({ ...state, date: false }));
      // eslint-disable-next-line no-unused-vars
      isFormValid = false;
    } else {
      setFormValidState(state => ({ ...state, date: true }));
    }

    if (!isFormValid) {
      return;
    }

    onSubmit(formProps);
    console.log(formProps);
  };

  return (
    <form className={styles['journal-form']} onSubmit={addJournalItem}>
      <input type="text" name="title" className={classNames(styles['input'], {
        [styles['invalid']]: !formValidState.title
      })} />
      <input type="date" name="date" className={`${styles['input']} ${formValidState.date ? '' : styles['invalid']}`} />
      <input type="text" name="tag"/>
      <textarea name="text" id="" cols="30" rows="10" className={`${styles['input']} ${formValidState.text ? '' : styles['invalid']}`}></textarea>
      <Button text="Сохранить" />
    </form>
  );
}

export default JournalForm;