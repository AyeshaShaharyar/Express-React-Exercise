import { React } from 'react';

export default function RepoDetails(props) {
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
      </tr>
    </div>
  );
}
