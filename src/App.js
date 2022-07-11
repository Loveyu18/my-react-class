import React from 'react';

function App() {
  // 只要有宣告就先寫<></>
  const elm = <></>;

  // 看到 on 開頭的就先寫箭頭函式
  // class -> className ; for -> htmlFor
  return (
    <>
      <h1 onClick={() => { }}>123</h1>
  
      <h1 className="t123">123</h1>
    </>
  );
}

export default App;
