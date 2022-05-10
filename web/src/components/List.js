import { React, useEffect, useState } from 'react';
import axios from 'axios';

export default function List() {
  const [list, setList] = useState([]);

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

  return (
    <div>
      <h1>list of repositories </h1>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Language</th>
            <th>Forks</th>
          </tr>
          {sortedListByDate.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.language}</td>
                <td>{item.forks_count}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
