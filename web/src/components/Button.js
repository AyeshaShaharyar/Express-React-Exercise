import { React, useState, useEffect } from 'react';
import axios from 'axios';
import List from './List';

export default function Button() {
  //get data from api
  const [list, setList] = useState([]);
  const [filteredList, setfilteredList] = useState([]);

  useEffect(() => {
    const URL = `http://localhost:4000/repos`;
    try {
      axios.get(URL).then((response) => {
        setList(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const sortedListByDate = list.sort((a, b) =>
    b.created_at.localeCompare(a.created_at)
  );

  //filtering data
  function handleBtn(e) {
    if (e.target.value === 'All') {
      setfilteredList(sortedListByDate);
    } else {
      setfilteredList(
        sortedListByDate.filter((item) => item.language === e.target.value)
      );
    }
  }

  return (
    <div>
      <button value="All" onClick={(e) => handleBtn(e)}>
        All
      </button>
      <button value="TypeScript" onClick={(e) => handleBtn(e)}>
        TypeScript
      </button>
      <button value="English" onClick={(e) => handleBtn(e)}>
        English
      </button>
      <button value="French" onClick={(e) => handleBtn(e)}>
        French
      </button>
      <button value="PHP" onClick={(e) => handleBtn(e)}>
        PHP
      </button>

      {filteredList.map((item) => (
        <div key={item.id}>
          <List list={item} />
        </div>
      ))}
    </div>
  );
}
