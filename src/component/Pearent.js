import React, { useState, useEffect } from "react";
import Child from "../component/Child";

export default function Pearent({
  PearentsData,
  ContentsData,
  height,
  width,
  widthSize,
  heightSize
}) {
  console.log("親要素作成");
  //変数定義
  const [state, setState] = useState();
  const [styleInf, setstyleInf] = useState();
  const [backColor, setbackColor] = useState("#FFFFFF");

  //親と子コンポーネントでやり取りする値
  const changeState = (isState) => {
    setState(isState);
    console.log("親要素-ステータス変更");
  };

  //親要素の背景色を変更する。
  //　判定は子要素で行い、親要素にTrue、False返却
  //
  useEffect(() => {
    const green = "#CBFFD3";
    const red = "#FFBEDA";
    let changeColor = "";

    //条件により変化する（True or False)
    if (state !== null) {
      state ? (changeColor = green) : (changeColor = red);
    } else {
      //白
      changeColor = "#FFFFFF";
    }

    setbackColor(changeColor);
    console.log("親要素-背景色変更：" + changeColor);
    console.log(PearentsData);
  }, [state]);

  //背景色が変更になった場合
  useEffect(() => {
    //親のStyle作成
    const StyleInf = {
      x: (PearentsData.x / widthSize) * width,
      y: (PearentsData.y / heightSize) * height,
      height: (PearentsData.height / heightSize) * height,
      width: (PearentsData.width / widthSize) * width,
      position: "absolute",
      top: (PearentsData.y / heightSize) * height,
      left: (PearentsData.x / widthSize) * width,
      background: backColor
    };
    setstyleInf(StyleInf);
    console.log("親要素-Sytle作成");
    console.log(styleInf);
    console.log(PearentsData);
  }, [backColor]);

  return (
    <div id={PearentsData.object_id} style={styleInf}>
      <Child
        chsngeStateChild={changeState}
        childrenData={ContentsData}
        height={height}
        width={width}
        widthSize={widthSize}
        heightSize={heightSize}
      />
    </div>
  );
}
