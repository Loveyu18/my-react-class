import { useState } from 'react';
import { counties, townships, postcodes } from './data/townships';

function TWZipCode() {
  // 範例資料
  const counties = ['台北市', '桃園市'];
  const townships = [
    ['中正區', '大同區', '中山區'],
    ['中壢區', '平鎮區', '龍潭區'],
  ];

  // 代表目前被選中縣市的索引值
  // 沒有被選時會用 -1
  const [countryIndex, setCountryIndex] = useState(-1);
  const [townshipsIndex, setTownshipsIndex] = useState(-1);

  return (
    <>
      <h1>台灣縣市區域連動下拉選單</h1>

      <select
        value={countryIndex}
        onChange={(e) => {
          // 注意 e.target.value 為字串類型
          // 為了保持與 state 的資料類型相同要轉為數字
          setCountryIndex(Number(e.target.value));

          // 重置 townshipsIndex 的值為-1
          setTownshipsIndex(-1);
        }}
      >
        <option value="-1">請選擇縣市</option>
        {counties.map((v, i) => {
          return (
            <option key={i} value={i}>
              {v}
            </option>
          );
        })}
      </select>
      <select
        value={townshipsIndex}
        onChange={(e) => {
          // 注意 e.target.value 為字串類型
          // 為了保持 setTownshipsIndex(state狀態) 的資料類型都一致相同，所以要轉為數字
          setTownshipsIndex(Number(e.target.value));
        }}
      >
        <option>請選擇區域</option>
        {countryIndex !== -1 &&
          townships[countryIndex].map((v, i) => {
            return (
              <option key={i} value={i}>
                {v}
              </option>
            );
          })}
      </select>
      <p>
        郵遞區號:
        {countryIndex > -1 &&
          townshipsIndex > -1 &&
          postcodes[countryIndex][townshipsIndex]}
      </p>
    </>
  );
}

export default TWZipCode;
