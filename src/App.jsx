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

  const addItem = item => {
    if (!item.id) {
      // Creating journal item
      setItems([...mapItems(items), {
        ...item,
        date: new Date(item.date),
        id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1
      }]);
    } else {
      // Updating journal item
      setItems([...mapItems(items).map(i => {
        if (i.id === item.id) {
          return {
            ...item
          };
        } else {
          return i;
        }
      })]);
    }
  };

  const deleteItem = (id) => {
    console.log('Delete', id);
    setItems([...items.filter(i => i.id !== id)]);
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
          <JournalForm onDelete={deleteItem} onSubmit={addItem} data={selectedItem}/>
        </Body>
      </div>
    </UserContexProvider>
  );
}

export default App;
