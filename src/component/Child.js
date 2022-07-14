import React, { useState, useEffect } from "react";
import ELcheckBox from "../element/ELcheckBox";

export default function Child({
  chsngeStateChild,
  childrenData,
  height,
  width,
  widthSize,
  heightSize
}) {
  const [isState_child, setState_child] = useState(null);

  const changeState = (isState) => {
    setState_child(isState);
  };

  //子から変更ありの場合
  useEffect(() => {
    chsngeStateChild(isState_child);
  }, [isState_child]);

  //要素作成
  //　子の要素分作成を行う。
  //　子が複数ある場合があるため、mapで回す。
  return childrenData.map((data) => {
    const StyleInf = {
      x: (data.x / widthSize) * width,
      y: (data.y / heightSize) * height,
      height: (data.height / heightSize) * height,
      width: (data.width / widthSize) * width,
      position: "absolute",
      top: (data.y / heightSize) * height,
      left: (data.x / widthSize) * width
    };
    if (data.contents_type === "checkbox") {
      return (
        <ELcheckBox
          chsngeState={changeState}
          required={data.required}
          divStyle={StyleInf}
        ></ELcheckBox>
      );
    } else if (data.contents_type === "label") {
      return <></>;
    }
  });
}
