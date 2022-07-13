import { useState } from 'react';

function Controllrd() {
  const [inputText, setInputText] = useState('');
  const [textArea, setTextArea] = useState('');

  // radio group
  const [gender, setGender] = useState('');
  //   const [radioChecked, setRadioChecked] = useState(false); 示範用
  const genderOpitons = ['男', '女', '不提供'];

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
    </>
  );
}

export default Controllrd;
