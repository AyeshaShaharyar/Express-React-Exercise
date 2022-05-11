import { React, useState } from 'react';
import RepoDetails from './RepoDetails';

export default function List(props) {
  const [showDetails, setShowDetails] = useState(false);

  function handleClick() {
    setShowDetails(true);
  }

  return (
    <div>
      <table className="table">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Language</th>
            <th>Forks</th>
          </tr>

          <tr key={props.list.id} onClick={() => handleClick()}>
            <td>{props.list.name}</td>
            <td>{props.list.description}</td>
            <td>{props.list.language}</td>
            <td>{props.list.forks_count}</td>
          </tr>

          {showDetails && (
            <RepoDetails
              author={props.list.owner.login}
              commit_date={props.list.updated_at}
              message={props.list.description}
            />
          )}
        </tbody>
      </table>
    </div>
  );
}
