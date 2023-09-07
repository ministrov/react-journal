import { useState } from 'react';
import './Button.css';

function Button() {
  const [text, setText] = useState('Сохранить');

  console.log(typeof text);

  const handleClick = () => {
    setText('Зактрыть');
    console.log('Button is clicked');
  };

  return (
    <button onClick={handleClick} className="button accent">{text}</button>
  );
}

export default Button;