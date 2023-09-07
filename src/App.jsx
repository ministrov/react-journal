import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';

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
    <div>
      New Project

      <Button/>

      <CardButton>
       + Новое воспоминание
      </CardButton>

      <CardButton>
        <JournalItem
          title={data[0].title}
          text={data[0].text}
          date={data[0].date}
        />
      </CardButton>
    </div>
  );
}

export default App;
