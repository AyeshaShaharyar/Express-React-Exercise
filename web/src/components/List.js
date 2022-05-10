import { React } from 'react';

export default function List(props) {
  // const [list, setList] = useState([]);

  // useEffect(() => {
  //   const URL = `http://localhost:4000/repos`;
  //   try {
  //     axios.get(URL).then((response) => {
  //       setList(response.data);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  // const sortedListByDate = list.sort((a, b) =>
  //   b.created_at.localeCompare(a.created_at)
  // );
  function handleClick() {
    alert('row got clicked');
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
          {/* {props.list.map((item) => {
            return ( */}
          <tr onClick={() => handleClick()}>
            <td>{props.list.name}</td>
            <td>{props.list.description}</td>
            <td>{props.list.language}</td>
            <td>{props.list.forks_count}</td>
          </tr>
          {/* );
          })} */}
        </tbody>
      </table>
    </div>
  );
}
