import { useState } from 'react';
import { useLocalStorage } from './hooks/use-localstorage.hook';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalForm from './components/JournalForm/JournalForm';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import { UserContexProvider } from './context/user.context';
// import { formReducer, INITIAL_STATE } from './components/JournalForm/JournalForm.state';
import './App.css';
// import { makeBinarySearch } from './utils';

// let arr = [2, 3, 4, 10, 40, 56, 123, 345];
// let x = 12;

// if (makeBinarySearch(arr, x)) {
//   console.log('Element found!');
// } else {
//   console.log('Element not found!');
// }

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
  // const [, dispatchForm] = useReducer(formReducer, INITIAL_STATE);

  const addItem = item => {
    if (!item.id) {
      setItems([...mapItems(items), {
        ...item,
        date: new Date(item.date),
        id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1
        // id: Math.floor(Math.random() * 10) + 1
      }]);
    } else {
      setItems([...mapItems(items).map(i => {
        if (i.id === item.id) {
          return {
            ...item
          };
        }
        return i;
      })]);
    }
  };

  const deleteItem = (id) => {
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
