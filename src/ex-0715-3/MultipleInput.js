import { Fragment, useState } from 'react';

function MultipleInput() {
  const [userData, setUserData] = useState({
    fullName: '',
    phone: '',
    email: '',
    grnder: '',
    car: '',
    likeList: [],
  });

  const genderOpitons = ['男', '女', '不提供'];
  const carOptions = ['Benz', 'BMW', 'Toyota'];
  const fruitOptions = ['芒果', '西瓜', '蘋果'];

  const handleChange = (e) => {
    // console.log(e.target.type, e.target.name, e.target.value);
    // 當作設定到狀態物件的一種做法
    // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/Object_initializer
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <label>姓名</label>
      <input
        name="fullName"
        type="text"
        value={userData.fullName}
        onChange={handleChange}
      />
      <br />
      <label>電話</label>
      <input
        name="phone"
        type="text"
        value={userData.phone}
        onChange={handleChange}
      />
      <br />
      <label>Email</label>
      <input
        name="email"
        type="text"
        value={userData.email}
        onChange={handleChange}
      />
      <br />
      <label>姓別：</label>{' '}
      {genderOpitons.map((v, i) => {
        return (
          <Fragment key={i}>
            <input
              name="gender"
              type="radio"
              checked={userData.gender === v}
              value={v}
              onChange={handleChange}
            />
            <label>{v}</label>
          </Fragment>
        );
      })}
      <br />
      <label>喜好的車子品牌</label>
      <select value={userData.car} name="car" onChange={handleChange}>
        <option value="">請選擇</option>
        {carOptions.map((v, i) => {
          return (
            <option key={i} value={v}>
              {v}
            </option>
          );
        })}
      </select>
      <br />
      <label>喜好的水果</label>
      {fruitOptions.map((v, i) => {
        return (
          <div key={i}>
            <input
              type="checkbox"
              checked={userData.likeList.includes(v)}
              value={v}
              onChange={(e) => {
                // 判斷目前值是否有在 likeList 狀態陣列中
                if (userData.likeList.includes(e.target.value)) {
                  // if 有 -> 移出陣列
                  // 1. 從目前狀態拷貝出新的變數值
                  // 2. 在新的變數狀態做處理
                  const nweLikeList = userData.likeList.filter((v, i) => {
                    return v !== e.target.value;
                  });
                  // 3. 設定回原本狀態中
                  setUserData({ ...userData, likeList: nweLikeList });
                } else {
                  // else -> 加入陣列

                  const nweLikeList = [...userData.likeList, e.target.value];
                  setUserData({ ...userData, likeList: nweLikeList });
                }
              }}
            />
            <label>{v}</label>
          </div>
        );
      })}
    </>
  );
}
export default MultipleInput;
