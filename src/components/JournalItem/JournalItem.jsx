import './JournalItem.css';

function JournalItem() {
  return (
    <div className='journal-item'>
      <h2 className='journal-item__header'>header</h2>
      <div className='journal-item__body'>
        <div className='journal-item__date'>1</div>
        <div className='journal-item__text'>2</div>
      </div>
    </div>
  );
}

export default JournalItem;