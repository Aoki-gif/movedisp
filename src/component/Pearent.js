import React, { useState, useEffect } from "react";
import { useWindowSize } from "react-use";
import ELcheckBox from "../element/ELcheckBox";
import ELNumber from "../element/ElNumber";
import ELDate from "../element/ElDate";
import "../style/ComponentD.css";

export default function Pearent({ PearentsData, ContentsData, MetaData }) {
  console.log("親要素作成");
  //画面サイズ取得(使用画面)
  const { width, height } = useWindowSize();
  //変数定義
  const [state, setState] = useState();
  const [requiredFlg, setRequired] = useState();
  const [backColor, setbackColor] = useState("#FFFFFF");
  const [styleInf, setstyleInf] = useState({
    x: PearentsData.x,
    y: PearentsData.y,
    height: PearentsData.height,
    width: PearentsData.width,
    position: "absolute",
    top: PearentsData.y,
    left: PearentsData.x,
    background: "#FFFFFF"
  });

  //親と子コンポーネントでやり取りする値
  //背景色変更
  const changeState = (isState) => {
    setState(isState);
  };

  //必須or不必要　設定
  const changeRequired = (isRequiredFlg) => {
    setRequired(isRequiredFlg);
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
      console.log("状態" + state);
      state ? (changeColor = green) : (changeColor = red);
    } else {
      //白
      changeColor = "#FFFFFF";
    }

    setbackColor(changeColor);
    console.log("親要素-背景色変更：" + changeColor);

    const newStyle = {
      x: PearentsData.x,
      y: PearentsData.y,
      height: PearentsData.height,
      width: PearentsData.width,
      position: "fixed",
      top: PearentsData.y,
      left: PearentsData.x,
      background: backColor
    };
    setstyleInf(newStyle);
  }, [state]);

  useEffect(() => {
    console.log("背景色変更後のUseEffect");
    console.log(PearentsData);
    console.log(styleInf);
  }, [styleInf]);

  return (
    <div
      id={PearentsData.object_id}
      style={styleInf}
      class={
        PearentsData.object_type === "Container"
          ? PearentsData.object_type
          : null
      }
    >
      {ContentsData.map((children) => {
        //子のStyle作成
        const childStyleInf = {
          x: children.x,
          y: children.y,
          height: children.height,
          width: children.width,
          position: "fixed",
          top: children.y,
          left: children.x
        };
        //Contentsの種別に応じてComponent変更
        if (children.contents_type === "checkbox") {
          return (
            <ELcheckBox
              chsngeState={changeState}
              required={children.required}
              divStyle={childStyleInf}
            ></ELcheckBox>
          );
        } else if (children.contents_type === "input_number") {
          console.log("MIN:" + children.min + "  MAX:" + children.max);
          return (
            <ELNumber
              chsngeNumber={changeState}
              required={children.required}
              divStyle={childStyleInf}
              Min={children.min}
              Max={children.max}
            ></ELNumber>
          );
        } else if (children.contents_type === "datetime") {
          console.log("children:" + children);
          console.log("PAST:" + children.past_dates);
          return (
            <ELDate
              required={children.required}
              divStyle={childStyleInf}
              PastFlg={children.past_dates}
            ></ELDate>
          );
        } else if (children.contents_type === "label") {
          return <div style={childStyleInf}>{children.text}</div>;
        } else {
          return <div>定義なしContents_type{children.contents_type}</div>;
        }
      })}
    </div>
  );
}
