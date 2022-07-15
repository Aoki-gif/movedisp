import React, { useState, useEffect } from "react";

export default function ElDate({ required, divStyle, PastFlg }) {
  //日付取得(表示している日付)
  var today = new Date(Date.now());
  //日付のmin設定用
  const formatDate = (today) => {
    let formatted_date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    return formatted_date;
  };

  //past_datesがTureなら今日日付より前の日時は入力出来ないように設定する。
  return (
    <div style={divStyle}>
      <input type="date" min={PastFlg ? formatDate : null}></input>
    </div>
  );
}
