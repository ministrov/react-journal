import { useEffect, useReducer, useRef } from 'react';
import classNames from 'classnames';
import Button from '../Button/Button';
import Input from '../Input/Input';
import styles from './JournalForm.module.css';
import { INITIAL_STATE, formReducer } from './JournalForm.state';
import { UserContext } from '../../context/user.context';

function JournalForm({ onSubmit }) {
  const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
  const { isValid, isFormReadyToSubmit, values } = formState;
  const titleRef = useRef();
  const dateRef = useRef();
  const postRef = useRef();

  const focusError = (isValid) => {
    switch(true) {
      case !isValid.title:
        titleRef.current.focus();
        break;
      case !isValid.date:
        dateRef.current.focus();
        break;
      case !isValid.post:
        postRef.current.focus();
        break;
    }
  };

  useEffect(() => {
    let timerId;
    // This code helps to clear inputs from red background in 2 seconds after submiting
    if (!isValid.title || !isValid.post || !isValid.date) {
      focusError(isValid);
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

  }, [isFormReadyToSubmit, values, onSubmit]);

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
    <UserContext.Consumer>
      {(context) => (
        <form className={styles['journal-form']} onSubmit={addJournalItem}>
          {context.userId}
          <div>
            <Input type="text" ref={titleRef} isValid={isValid.title} onChange={onChange} value={values.title} name="title" appearence="title" />
          </div>
          <div className={styles['form-row']}>
            <label htmlFor="date" className={styles['form-label']}>
              <img src="/calendar.svg" alt="Иконка календаря" />
              <span>Дата</span>
            </label>
            <Input type="date" ref={dateRef} isValid={isValid.date} onChange={onChange} value={values.date} name="date" id="date" />
          </div>

          <div className={styles['form-row']}>
            <label htmlFor="tag" className={styles['form-label']}>
              <img src="/folder.svg" alt="Иконка папки" />
              <span>Метки</span>
            </label>
            <Input type="text" onChange={onChange} value={values.tag} className={styles['input']} name="tag" id="tag" />
          </div>

          <textarea name="post" ref={postRef} onChange={onChange} value={values.post} id="" cols="30" rows="10" className={classNames(styles['input'], {
            [styles['invalid']]: !isValid.post
          })}></textarea>
          <Button text="Сохранить" />
        </form>
      )}
    </UserContext.Consumer>
  );
}

export default JournalForm;