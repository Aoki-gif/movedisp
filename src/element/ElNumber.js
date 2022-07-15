import React, { useState, useEffect } from "react";

//Contents種別がNumber
export default function ElNumber({
  chsngeNumber,
  required,
  divStyle,
  Min,
  Max
}) {
  console.log("Numberコンポーネント作成");

  //　InputがNumber　の値が変更された時
  const onChangeNumber = (event) => {
    let inputValue = event.target.value;
    console.log("min:" + Min);
    console.log("max:" + Max);
    let rtnjudge = false;
    if (Min !== null || Max !== null) {
      if (Min !== null) {
        if (inputValue >= Min) {
          rtnjudge = true;
        }
      }
      if (Max !== null) {
        if (inputValue <= Max) {
          rtnjudge = true;
        }
      }
    } else {
      //両方NULL（上限、下限なし)
      rtnjudge = true;
    }
    console.log("rtnjudge:" + rtnjudge);
    //親コンポーネント背景色変更
    chsngeNumber(rtnjudge);
  };

  return (
    <div style={divStyle}>
      <input type="number" onChange={onChangeNumber}></input>
    </div>
  );
}
