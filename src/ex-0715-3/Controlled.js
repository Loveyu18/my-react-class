import { useState } from 'react';

function Controllrd() {
  const [inputText, setInputText] = useState('');
  const [textArea, setTextArea] = useState('');

  // radio group
  const [gender, setGender] = useState('');
  //   const [radioChecked, setRadioChecked] = useState(false); 示範用
  const genderOpitons = ['男', '女', '不提供'];

  // select
  const [car, setCar] = useState('BMW');
  const carOpitons = ['Benz', 'BMW', 'Toyota'];

  // checkbox -single
  const [agree, setAgree] = useState(false); // 預設為不選

  // checkbox -group
  const [likeList, setLikeList] = useState([]);
  const fruitOptions = ['西瓜', '芒果', '蘋果'];

  return (
    <>
      <section id="input-text">
        <h1>文字輸入框(input-text)</h1>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
      </section>

      <section id="textArea">
        <h1>文字輸入框(textArea)</h1>
        <textarea
          type="text"
          value={textArea}
          onChange={(e) => {
            setTextArea(e.target.value);
          }}
        />
      </section>

      <section id="radio-group">
        <h1>選項按鈕-群組(radio-group)</h1>
        {genderOpitons.map((v, i) => {
          return (
            <div key={i}>
              <input
                type="radio"
                checked={gender === v}
                value={v}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
              <label>{v}</label>
            </div>
          );
        })}
      </section>

      <section id="select">
        <h1>下拉選單(select)</h1>{' '}
        <select value={car} onChange={(e) => setCar(e.target.value)}>
          <option value={'請選擇'} disabled>
            請選擇
          </option>
          {carOpitons.map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            );
          })}
        </select>
      </section>

      <section id="checkbox-single">
        <h1>核取方塊(單一)</h1>
        <input
          type="checkbox"
          checked={agree}
          onChange={(e) => {
            setAgree(e.target.checked);
          }}
        />
        <label>我同意會員條款</label>
      </section>
      <section id="checkbox-group">
        <h1>核取方塊(群組)</h1>
        {fruitOptions.map((v, i) => {
          return (
            <div key={i}>
              <input
                type="checkbox"
                checked={likeList.includes(v)}
                value={v}
                onChange={(e) => {
                  // 判斷目前值是否有在 likeList 狀態陣列中
                  if (likeList.includes(e.target.value)) {
                    // if 有 -> 移出陣列
                    // 1. 從目前狀態拷貝出新的變數值
                    // 2. 在新的變數狀態做處理
                    const nweLikeList = likeList.filter((v, i) => {
                      return v !== e.target.value;
                    });
                    // 3. 設定回原本狀態中
                    setLikeList(nweLikeList);
                  } else {
                    // else -> 加入陣列
                    const nweLikeList = [...likeList, e.target.value];
                    setLikeList(nweLikeList);
                  }
                }}
              />
              <label>{v}</label>
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Controllrd;
