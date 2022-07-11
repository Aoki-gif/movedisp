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

  console.log(jsonData);
  //初期値
  const metaData = jsonData[0];

  console.log(metaData);

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
      <div style={ItemsStyleInf} class={object.object_type}>
        {object.text ? <p>{object.text}</p> : undefined}
      </div>
    );
  });
}
