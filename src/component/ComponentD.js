import React, { useState } from "react";
import { useWindowSize } from "react-use";
import { useLocation } from "react-router-dom";
import { useRoute } from "@react-navigation/native";
import "../style/ComponentD.css";

export default function ComponentD() {
  //ルート使用用変数
  const location = useLocation();
  //画面サイズ取得(使用画面)
  const { width, height } = useWindowSize();
  const jsonData = JSON.parse(location.state);

  //console.log(jsonData);
  //初期値
  const metaData = jsonData[0];

  //表示アイテムの作成
  const dispItems = () => {
    //メインスタイル
    const MainStyleInf = {
      height: metaData.height,
      width: metaData.width,
      position: "relative"
    };
    //親
    const PearentStyle = {
      x: (jsonData[1].x / metaData.width) * width,
      y: (jsonData[1].y / metaData.height) * height,
      height: (jsonData[1].height / metaData.height) * height,
      width: (jsonData[1].width / metaData.width) * width,
      position: "absolute",
      top: (jsonData[1].y / metaData.height) * height,
      left: (jsonData[1].x / metaData.width) * width
    };

    var div = document.createElement("div");
    //始祖の子分ループさせる
    for (let i = 0; i < jsonData[1].child.length; i++) {
      //始祖の子の名前と一致するObject_idを探す
      for (let j = 0; j < jsonData.length; j++) {
        let childname = "";
        console.log(j);
        //始祖の孫の名前と一致するObject_idを探す
        //基本、始祖の子以降に孫が定義されているため、ループ開始はJの値から
        for (let k = j; k < jsonData.length; k++) {
          //child名=object_idが一致
          if (jsonData[k].object_id === childname) {
            let babyElemnt = document.createElement("div");
            let inputElemnt = document.createElement("input");

            //孫のStyle作成
            let babyStyleInf = {
              x: (jsonData[k].x / metaData.width) * width,
              y: (jsonData[k].y / metaData.height) * height,
              height: (jsonData[k].height / metaData.height) * height,
              width: (jsonData[k].width / metaData.width) * width,
              position: "absolute",
              top: (jsonData[k].y / metaData.height) * height,
              left: (jsonData[k].x / metaData.width) * width
            };

            //Style設定
            babyElemnt.style = babyStyleInf;

            //各要素の追加
            if (jsonData[k].contents_type !== "label") {
              inputElemnt.setAttribute("type", jsonData[k].contents_type);
            }

            if (jsonData[k].contents_type === "checkbox") {
              inputElemnt.checked = false;
            } else if (jsonData[k].contents_type === "datetime") {
            } else if (jsonData[k].contents_type === "input_number") {
            } else if (jsonData[k].contents_type === "label") {
              babyElemnt.textContent = jsonData[k].text;
            }
          }
        }
      }
    }
    const Pearent = React.createElement("div", { style: MainStyleInf });
    return <div>aaaa</div>;
  };

  //　InputがNumber　の値が変更された時
  const onChangeNumber = (event) => {
    let inputValue = event.target.value;
    console.log(inputValue);
    console.log(event);
    const min = 0;
    const max = 5;
  };

  return jsonData.map((object, index) => {
    let ItemsStyleInf;
    if (index === 0) {
      ItemsStyleInf = {
        height: object.height,
        width: object.width,
        position: "relative"
      };
    } else {
      ItemsStyleInf = {
        x: (object.x / metaData.width) * width,
        y: (object.y / metaData.height) * height,
        height: (object.height / metaData.height) * height,
        width: (object.width / metaData.width) * width,
        position: "absolute",
        top: (object.y / metaData.height) * height,
        left: (object.x / metaData.width) * width
      };
    }
    return (
      <div
        style={ItemsStyleInf}
        class={object.contents_type ? object.contents_type : object.object_type}
        id={object.object_id}
      >
        {object.contents_type ? (
          object.contents_type ===
          "label" ? undefined : object.contents_type === "datetime" ? (
            <input type="date"></input>
          ) : object.contents_type === "input_number" ? (
            <input type="number" onChange={onChangeNumber}></input>
          ) : (
            <input type={object.contents_type}></input>
          )
        ) : undefined}
        {object.text ? <p>{object.text}</p> : undefined}
      </div>
    );
  });
}
