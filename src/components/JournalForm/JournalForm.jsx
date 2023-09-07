import { useState } from 'react';
import './JournalForm.css';
import Button from '../Button/Button';

function JournalForm() {
  const [inputData, setInputData] = useState('');
  const [state, setState] = useState({
    age: 31
  });

  const handleInput = (event) => {
    setInputData(event.target.value);
    console.log(inputData);
  };

  const addJournalItem = (event) => {
    event.preventDefault();

    state.age = 40;

    setState({ ...state });

    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
  };

  return (
    <form className="journal-form" onSubmit={addJournalItem}>
      {state.age}
      <input type="text" name="title"/>
      <input type="date" name="date"/>
      <input type="text" name="tag" value={inputData} onChange={handleInput} />
      <textarea name="post" id="" cols="30" rows="10"></textarea>
      <Button text="Сохранить" onClick={() => { console.log('Clicked'); }}/>
    </form>
  );
}

export default JournalForm;