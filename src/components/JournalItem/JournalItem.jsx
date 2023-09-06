import './JournalItem.css';

function JournalItem({ data }) {

  return (
    <div className='journal-item'>
      <h2 className='journal-item__header'>{data[0].title}</h2>
      <div className='journal-item__body'>
        <div className='journal-item__date'>{data[0].date.toString()}</div>
        <div className='journal-item__text'>{data[0].text}</div>
      </div>
    </div>
  );
}

export default JournalItem;