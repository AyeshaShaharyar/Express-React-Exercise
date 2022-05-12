import { React, useEffect, useState } from 'react';
import axios from 'axios';

export default function RepoDetails(props) {
  const [readMe, setReadMe] = useState(null);

  useEffect(() => {
    const URL = `https://raw.githubusercontent.com/${props.repo_name}/master/README.md`;
    try {
      axios.get(URL).then((response) => {
        setReadMe(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div>
      <tr>
        <th>Author</th>
        <th>Commit Date</th>
        <th>Message</th>
      </tr>

      <tr>
        <td>{props.author}</td>
        <td>{props.commit_date}</td>
        <td>{props.message}</td>
      </tr>
      <div>
        <h3>ReadME</h3>
        <p>{readMe}</p>
      </div>
    </div>
  );
}
