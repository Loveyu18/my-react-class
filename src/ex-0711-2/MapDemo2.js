import { Fragment } from 'react';
// import { data } from './data/student';

// 直接導入 JSON 檔，會自動轉為 js 的資料值
import data from './data/products.json';
import './MapDemo.css';

function MapDemo2() {
  return (
    <>
      <h1>Map</h1>
      {/* map filter wihle wihleindex 都用這樣寫 */}
      <ul>
      
        {data.map((v, i) => {
          //只要看到 map 方法就一定要加 key
          //有 id 就要用 id
          // 沒 id 用 uuid or nanoid
          //資料不會變動可以用索引值 i
          return (
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">picture</th>
                  <th scope="col">stock</th>
                  <th scope="col">name</th>
                  <th scope="col">price</th>
                  <th scope="col">tags</th>
                </tr>
              </thead>
              <tbody>
                <tr key={v.id}>
                  <td>{v.id}</td>
                  <img src={v.picture} />
                  <td>{v.stock}</td>
                  <td>{v.name}</td>
                  <td>{v.price}</td>
                  <td>{v.tags}</td>
                </tr>
              </tbody>
            </table>
          );
        })}
      </ul>
    </>
  );
}

export default MapDemo2;
