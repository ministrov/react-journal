import './JournalItem.css';

function JournalItem({ title, text, date }) {
  const formatedDate = new Intl.DateTimeFormat('ru-Ru').format(date);

  console.log(typeof formatedDate);

  return (
    <div className='journal-item'>
      <h2 className='journal-item__header'>{title}</h2>
      <div className='journal-item__body'>
        <div className='journal-item__date'>{formatedDate}</div>
        <div className='journal-item__text'>{text}</div>
      </div>
    </div>
  );
}

export default JournalItem;