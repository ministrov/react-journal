import './JournalForm.css';
import Button from '../Button/Button';

function JournalForm({ onSubmit }) {

  const addJournalItem = (event) => {
    event.preventDefault();

    // state.age = 40;

    // setState({ ...state });

    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);
    onSubmit(formProps);
    console.log(formProps);
  };

  return (
    <form className="journal-form" onSubmit={addJournalItem}>
      <input type="text" name="title"/>
      <input type="date" name="date"/>
      <input type="text" name="tag"/>
      <textarea name="text" id="" cols="30" rows="10"></textarea>
      <Button text="Сохранить" onClick={() => { console.log('Clicked'); }}/>
    </form>
  );
}

export default JournalForm;