import { useLocalStorage } from './hooks/use-localstorage.hook';
import Body from './layouts/Body/Body';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalForm from './components/JournalForm/JournalForm';
import './App.css';
import { UserContexProvider } from './context/user.context';
import { useState } from 'react';

// const INITIAL_DATA = [
//   {
//     id: 1,
//     title: 'Подготовка к обновлению курсов',
//     post: 'Горные походы открывают удивительные природные ландшафты',
//     date: new Date()
//   },
//   {
//     id: 2,
//     title: 'Поход в годы',
//     post: 'Думал, что очень много времени',
//     date: new Date()
//   },
//   {
//     id: 3,
//     title: 'Первая заметка',
//     post: 'Создал первую заметку, чтобы',
//     date: new Date()
//   }
// ];

function mapItems(items) {
  if (!items) {
    return [];
  }

  return items.map(i => ({
    ...i,
    date: new Date(i.date)
  }));
}

function App() {
  const [items, setItems] = useLocalStorage('data');
  const [selectedItem, setSelectedItem] = useState({});

  console.log(selectedItem);

  const addItem = item => {
    setItems([...mapItems(items), {
      ...item,
      date: new Date(item.date),
      id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1
    }]);
  };

  return (
    <UserContexProvider>
      <div className="app">
        <LeftPanel>
          <Header />
          <JournalAddButton />
          <JournalList items={mapItems(items)} setItem={setSelectedItem}/>
        </LeftPanel>

        <Body>
          <JournalForm onSubmit={addItem} data={selectedItem}/>
        </Body>
      </div>
    </UserContexProvider>
  );
}

export default App;
