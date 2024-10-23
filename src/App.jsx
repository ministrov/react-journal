import { useState, useEffect } from 'react';
import { useLocalStorage } from './hooks/use-localstorage.hook.js';
import nextId from 'react-id-generator';
import JournalAddButton from './components/JournalAddButton/JournalAddButton.jsx';
import Header from './components/Header/Header.jsx';
import JournalList from './components/JournalList/JournalList.jsx';
import JournalForm from './components/JournalForm/JournalForm.jsx';
import Body from './layouts/Body/Body.jsx';
import LeftPanel from './layouts/LeftPanel/LeftPanel.jsx';
import { UserContexProvider } from './context/user.context.jsx';
import { ThemeContext } from './context/theme.context.js';
import './App.css';

// To define a geolocation position of the user
const getCurrentPosition = () => {
  // navigator.geolocation.getCurrentPosition(
  //   position => console.log(position),
  //   error => console.log(error)
  // );
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

async function getUserLocation() {
  try {
    const location = getCurrentPosition();
    console.log(location);
  } catch (error) {
    console.error(error);
  }
}

console.log(getUserLocation());

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
  const [theme, setTheme] = useState('dark');

  // useEffect(() => {
  //   window.addEventListener('keydown', (event) => {
  //     console.log(`Вы нажали на кнопку: ${event.key}`);
  //   });

  //   // return () => {
  //   //   removeEventListener('keydown', window);
  //   // }
  // }, []);

  const addItem = item => {
    if (!item.id) {
      setItems([...mapItems(items), {
        ...item,
        date: new Date(item.date),
        id: nextId()
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

  const toggleTheme = () => {
    setTheme((curr) => curr === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <UserContexProvider>
        <div className="app" id={theme}>
          <LeftPanel>
            <Header />
            <JournalAddButton />
            <JournalList items={mapItems(items)} setItem={setSelectedItem} />
          </LeftPanel>

          <Body>
            <JournalForm onDelete={deleteItem} onSubmit={addItem} data={selectedItem} />
          </Body>

          {/* <Checkbox typeName={'shipping'} typeLabel={'Shipping for label'}/> */}
        </div>
      </UserContexProvider>
    </ThemeContext.Provider>
  );
}

export default App;
