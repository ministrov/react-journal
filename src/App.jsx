import Button from './components/Button/Button';
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

      <JournalItem
        title={data[0].title}
        text={data[0].text}
        date={data[0].date}
      />
      <JournalItem
        title={data[1].title}
        text={data[1].text}
        date={data[1].date}
      />
      <JournalItem
        title={data[2].title}
        text={data[2].text}
        date={data[2].date}
      />
    </div>
  );
}

export default App;
