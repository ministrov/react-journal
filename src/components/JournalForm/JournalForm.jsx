import { useEffect, useReducer } from 'react';
import classNames from 'classnames';
import Button from '../Button/Button';
import styles from './JournalForm.module.css';
import { INITIAL_STATE, formReducer } from './JournalForm.state';

function JournalForm({ onSubmit }) {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const { isValid, isFormReadyToSubmit, values } = formState;

  useEffect(() => {
    let timerId;
    // This code helps to clear inputs from red background in 2 seconds after submiting
    if (!isValid.title || !isValid.post || !isValid.date) {
      timerId = setTimeout(() => {
        dispatchForm({ type: 'RESET_VALIDITY'});
      }, 2000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [isValid]);

  useEffect(() => {
    if (isFormReadyToSubmit) {
      onSubmit(values);
      dispatchForm({ type: 'CLEAR'});
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormReadyToSubmit]);

  const onChange = (event) => {
    dispatchForm({ type: 'SET_VALUE', payload: { [event.target.name]: event.target.value}});
  };

  const addJournalItem = (event) => {
    event.preventDefault();

    // const formData = new FormData(event.target);
    // const formProps = Object.fromEntries(formData);

    // Form data validation
    // let isFormValid = true;
    dispatchForm({ type: 'SUBMIT' });
    // if (!formProps.title?.trim().length) {
    //   setFormValidState(state => ({ ...state, title: false}));
    //   // eslint-disable-next-line no-unused-vars
    //   isFormValid = false;
    // } else {
    //   setFormValidState(state => ({ ...state, title: true }));
    // }

    // if (!formProps.text?.trim().length) {
    //   setFormValidState(state => ({ ...state, text: false }));
    //   // eslint-disable-next-line no-unused-vars
    //   isFormValid = false;
    // } else {
    //   setFormValidState(state => ({ ...state, text: true }));
    // }

    // if (!formProps.date) {
    //   setFormValidState(state => ({ ...state, date: false }));
    //   // eslint-disable-next-line no-unused-vars
    //   isFormValid = false;
    // } else {
    //   setFormValidState(state => ({ ...state, date: true }));
    // }

    // if (!isFormValid) {
    //   return;
    // }
  };

  return (
    <form className={styles['journal-form']} onSubmit={addJournalItem}>
      <div>
        <input type="text" onChange={onChange} value={values.title} name="title" className={classNames(styles['input-title'], {
          [styles['invalid']]: !isValid.title
        })} />
      </div>
      <div className={styles['form-row']}>
        <label htmlFor="date" className={styles['form-label']}>
          <img src="/calendar.svg" alt="Иконка календаря" />
          <span>Дата</span>
        </label>
        <input type="date" onChange={onChange} value={values.date} name="date" id="date" className={classNames(styles['input'], {
          [styles['invalid']]: !isValid.date
        })} />
      </div>

      <div className={styles['form-row']}>
        <label htmlFor="tag" className={styles['form-label']}>
          <img src="/folder.svg" alt="Иконка папки" />
          <span>Метки</span>
        </label>
        <input type="text" onChange={onChange} value={values.tag} className={styles['input']} name="tag" id="tag"/>
      </div>

      <textarea name="post" onChange={onChange} value={values.post} id="" cols="30" rows="10" className={classNames(styles['input'], {
        [styles['invalid']]: !isValid.post
      })}></textarea>
      <Button text="Сохранить" />
    </form>
  );
}

export default JournalForm;