import Body from './layouts/Body/Body';
// import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalItem from './components/JournalItem/JournalItem';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import './App.css';

function App() {
  const data = [
    {
      title: 'Подготовка к обновлению курсов',
      text: 'Горные походы открывают удивительные природные ландшафты',
      date: new Date()
    },
    {
      title: 'Поход в годы',
      text: 'Думал, что очень много времени',
      date: new Date()
    },
    {
      title: 'Первая заметка',
      text: 'Создал первую заметку, чтобы',
      date: new Date()
    }
  ];

  return (
    <div className="app">
      <LeftPanel>
        <Header/>
        <JournalAddButton />
        <JournalList>
          <CardButton>
            <JournalItem
              title={data[0].title}
              text={data[0].text}
              date={data[0].date}
            />
          </CardButton>

          <CardButton>
            <JournalItem
              title={data[1].title}
              text={data[1].text}
              date={data[1].date}
            />
          </CardButton>
        </JournalList>
      </LeftPanel>

      <Body>
        Поход в годы
      </Body>
    </div>
  );
}

export default App;
