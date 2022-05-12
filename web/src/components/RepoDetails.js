import { React, useEffect, useState } from 'react';
import axios from 'axios';

export default function RepoDetails(props) {
  const [readMe, setReadMe] = useState(null);

  useEffect(() => {
    const URL = `https://raw.githubusercontent.com/${props.repo_name}/master/README.md`;
    try {
      axios.get(URL).then((response) => {
        console.log(response);
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
        <th>ReadMe</th>
      </tr>

      <tr>
        <td>{props.author}</td>
        <td>{props.commit_date}</td>
        <td>{props.message}</td>
        <td>{readMe}</td>
      </tr>
    </div>
  );
}
