import { useContext, useMemo } from 'react';
import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';
import './JournalList.css';
import { UserContext } from '../../context/user.context';

function JournalList({ items, setItem }) {
  const { userId } = useContext(UserContext);

  const sortItem = (a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  };

  const filteredItems = useMemo(() => items
    .filter(el => el.userId === userId)
    .sort(sortItem), [items, userId]);

  if (items.length === 0) {
    return <p>There is no notes</p>;
  }


  return (
    <>
      {filteredItems
        .map(item => (
          <CardButton key={item.id} onClick={() => setItem(item)}>
            <JournalItem
              title={item.title}
              post={item.post}
              date={item.date}
            />
          </CardButton>
      ))}
    </>
  );
}

export default JournalList;