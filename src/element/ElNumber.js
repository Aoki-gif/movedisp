import React, { useState, useEffect } from "react";

//Contents種別がNumber
export default function ElNumber({
  chsngeNumber,
  NumRequired,
  divStyle,
  Min,
  Max
}) {
  console.log("Numberコンポーネント作成");

  //　InputがNumber　の値が変更された時
  const onChangeNumber = (event) => {
    let inputValue = event.target.value;
    console.log("inputValue:" + inputValue);
    let rtnjudge = true;
    if (Min !== null || Max !== null) {
      if (Min !== null && Max !== null) {
        //Min Max 範囲内
        if (inputValue <= Max && inputValue >= Min) {
          rtnjudge = false;
          console.log("Min＆Max:OK");
        }
      } else if (Max !== null) {
        //Max 範囲内
        if (inputValue <= Max) {
          rtnjudge = false;
          console.log("Max:OK");
        }
      } else if (Min !== null) {
        //min範囲内
        if (inputValue >= Min) {
          rtnjudge = false;
          console.log("Min:OK");
        }
      }
    } else {
      //両方NULL（上限、下限なし)
      rtnjudge = false;
    }
    console.log("rtnjudge:" + rtnjudge);
    //親コンポーネント背景色変更
    chsngeNumber(rtnjudge);
  };

  return (
    <div>
      <input
        type="number"
        style={{ width: "50%" }}
        onChange={onChangeNumber}
        required={NumRequired}
      ></input>
    </div>
  );
}
