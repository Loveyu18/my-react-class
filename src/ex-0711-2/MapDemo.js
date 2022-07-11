import { data } from './data/student';

function MapDemo() {
  return (
    <>
      <h1>Map</h1>
      {/* map filter wihle wihleindex 都用這樣寫 */}
      <ul>
        {data.map((v, i) => {
          {
            /* 只要看到 map 方法就一定要加 key */
          }
          {
            /* 有 id 就要用 id */
          }
          {
            /* 沒 id 用 uuid or nanoid */
          }
          {
            /* 資料不會變動可以用索引值 i */
          }
          return (
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Birthday</th>
                </tr>
              </thead>
              <tbody>
                <tr key={v.id}>
                  <td>{v.id}</td>
                  <td>{v.name}</td>
                  <td>{v.birth}</td>
                </tr>
              </tbody>
            </table>
          );
        })}
      </ul>
    </>
  );
}

export default MapDemo;
