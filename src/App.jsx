import { useState } from 'react';
import Body from './layouts/Body/Body';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalForm from './components/JournalForm/JournalForm';
import './App.css';

const INITIAL_DATA = [
  {
    id: 1,
    title: 'Подготовка к обновлению курсов',
    post: 'Горные походы открывают удивительные природные ландшафты',
    date: new Date()
  },
  {
    id: 2,
    title: 'Поход в годы',
    post: 'Думал, что очень много времени',
    date: new Date()
  },
  {
    id: 3,
    title: 'Первая заметка',
    post: 'Создал первую заметку, чтобы',
    date: new Date()
  }
];

function App() {
  const [items, setItems] = useState(INITIAL_DATA);

  // useEffect(() => {
  //   console.log(items);
  // }, [items]);

  const addItem = item => {
    setItems(oldItems => [...oldItems, {
      post: item.post,
      title: item.title,
      date: new Date(item.date),
      id: oldItems.length > 0 ? Math.max(...oldItems.map(i => i.id)) + 1 : 1
    }]);
  };

  return (
    <div className="app">
      <LeftPanel>
        <Header/>
        <JournalAddButton />
        <JournalList items={items}/>
      </LeftPanel>

      <Body>
        <JournalForm onSubmit={addItem}/>
      </Body>
    </div>
  );
}

export default App;
