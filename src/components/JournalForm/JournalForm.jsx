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
      <div>
        <input type="text" name="title" className={classNames(styles['input-title'], {
          [styles['invalid']]: !formValidState.title
        })} />
      </div>
      <div className={styles['form-row']}>
        <label htmlFor="date" className={styles['form-label']}>
          <img src="/calendar.svg" alt="Иконка календаря" />
          <span>Дата</span>
        </label>
        <input type="date" name="date" id="date" className={classNames(styles['input'], {
          [styles['invalid']]: !formValidState.date
        })} />
      </div>

      <div className={styles['form-row']}>
        <label htmlFor="tag" className={styles['form-label']}>
          <img src="/folder.svg" alt="Иконка папки" />
          <span>Метки</span>
        </label>
        <input type="text" className={styles['input']} name="tag" id="tag"/>
      </div>

      <textarea name="text" id="" cols="30" rows="10" className={classNames(styles['input'], {
        [styles['invalid']]: !formValidState.text
      })}></textarea>
      <Button text="Сохранить" />
    </form>
  );
}

export default JournalForm;