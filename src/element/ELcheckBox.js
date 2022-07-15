import React, { useState, useEffect } from "react";

export default function ElCheckBox({ chsngeState, required, divStyle }) {
  console.log("チェックボックスコンポーネント作成");
  const [check, setcheck] = useState();
  //とりあえずisStateにはtrueを格納
  let isState = null;

  //チェック状態　変更合った場合
  useEffect(() => {
    if (required) {
      //必須の場合
      check ? (isState = true) : (isState = false);
      console.log("必要の場合:" + isState);
    } else {
      //必須ではない
      check ? (isState = true) : (isState = null);
      console.log("不必要の場合:" + isState);
    }
    //親から貰ったを実行
    chsngeState(isState);
  }, [check]);

  //チェックボックス押下時に呼ばれる関数
  const onChangeBox = (e) => {
    setcheck(e.target.checked);
  };

  return (
    <div style={divStyle}>
      <input type="checkbox" onChange={onChangeBox}></input>
    </div>
  );
}
