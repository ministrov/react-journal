import { useState, useEffect } from 'react';

export function useLocalStorage(key) {
  const [data, setData] = useState();

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem(key));
    // console.log(res);
    if (res) {
      setData(res);
    }
  }, [key]);

  const saveData = (newData) => {
    localStorage.setItem(key, JSON.stringify(newData));
    setData(newData);
  };

  return [data, saveData];
}
