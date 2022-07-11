import React from 'react';

function JSXDemo(props) {
  return (
    <>
      <h1>JSX各種類型值呈現</h1>
      <h2>Number</h2>
      {123 - 2}
      {NaN}
      <h2>String</h2>
      {'abc'}
      {`hello ${100 - 5}`}
      <h2>Boolean(不呈現)</h2>
      {true}
      {false}
      <h2>Null(不呈現)</h2>
      {null}
      <h2>undefined(不呈現)</h2>
      {undefined}
      <h2>Array</h2>
      {[1, 2, 3, 4]}
      <h2>Object</h2>
      {/* {{ a: 1, b: 2 }}  */}
      {/* 物件不是合法的值，會有中斷錯誤，要用陣列 */}
      <h2>函式</h2>
      {() => {
        console.log(123);
      }}
    </>
  );
}

export default JSXDemo;
