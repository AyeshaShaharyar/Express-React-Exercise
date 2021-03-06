import { React, useEffect, useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import * as dayjs from 'dayjs';

export default function RepoDetails(props) {
  //get readme data from url provided
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
        <td>{dayjs(props.commit_date).format('DD/MM/YYYY')}</td>
        <td>{props.message}</td>
      </tr>
      <div>
        <h2>ReadME</h2>
        <ReactMarkdown>{readMe}</ReactMarkdown>
      </div>
    </div>
  );
}
