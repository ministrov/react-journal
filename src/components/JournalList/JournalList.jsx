import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';
import './JournalList.css';

function JournalList({ items }) {
  if (items.length === 0) {
    return <p>There is no notes</p>;
  }

  const sortItem = (a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  };


  return (
    <>
      {items.sort(sortItem).map(item => (
        <CardButton key={item.id}>
          <JournalItem
            title={item.title}
            text={item.text}
            date={item.date}
          />
        </CardButton>
      ))}
    </>
  );
}

export default JournalList;