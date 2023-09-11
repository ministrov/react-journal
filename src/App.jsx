import Body from './layouts/Body/Body';
// import Button from './components/Button/Button';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import './App.css';
import JournalForm from './components/JournalForm/JournalForm';
// import Button from './components/Button/Button';
import { useState, useEffect } from 'react';

const INITIAL_DATA = [
  {
    id: 1,
    title: 'Подготовка к обновлению курсов',
    text: 'Горные походы открывают удивительные природные ландшафты',
    date: new Date()
  },
  {
    id: 2,
    title: 'Поход в годы',
    text: 'Думал, что очень много времени',
    date: new Date()
  },
  {
    id: 3,
    title: 'Первая заметка',
    text: 'Создал первую заметку, чтобы',
    date: new Date()
  }
];

function App() {
  const [items, setItems] = useState(INITIAL_DATA);

  useEffect(() => {
    console.log(items);
  }, [items]);

  const addItem = item => {
    setItems(oldItems => [...oldItems, {
      text: item.text,
      title: item.title,
      date: new Date(item.date),
      id: oldItems.length > 0 ? Math.max(...oldItems.map(i => i.id)) + 1 : 1
    }]);
  };

  // console.log(addItem(items));

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
