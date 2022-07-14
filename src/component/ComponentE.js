import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useWindowSize } from "react-use";

export default function ComponentE() {
  //遷移元からデータ取得
  const location = useLocation();
  //画面サイズ取得(使用画面)
  const { width, height } = useWindowSize();
  //JSONファイル形式に変換
  const jsonData = JSON.parse(location.state);

  //レンダリングしたObject
  const [newJson, setJson] = useState();

  console.log(jsonData);

  //親要素
  const PearentCompornent = () => {
    //Parent要素とChild要素があるものを探す
    for (let i = 0; i < jsonData.lenght; i++) {
      if (jsonData[i].parent.lenght > 0 && jsonData[i].child.lenght > 0) {
        const dataItem = {
          object_id: jsonData[i].object_id,
          object_type: jsonData[i].object_type,
          x: jsonData[i].x,
          y: jsonData[i].y,
          width: jsonData[i].width,
          height: jsonData[i].height,
          top: (jsonData[i].y / jsonData[0].height) * height,
          left: (jsonData[i].x / jsonData[0].width) * width,
          children: []
        };
        //子要素の検索(子要素が複数パターン想定)
        for (let j = 0; j < jsonData[i].child.lenght; j++) {
          let childItem = jsonData.find(
            (e) => e.object_id === jsonData[i].child[j]
          );
          //置き換え
          dataItem.children = childItem;
        }
      }
    }
  };
  //子要素
  const ChildrenCompornent = () => {};

  //子要素（チェックボックス)
  const CheckBox = () => {
    const onChangeCheckBox = () => {
      // Do something...
    };
  };
  //子要素（ラベル)
  const Label = () => {};

  //子要素（日付)
  const Date = () => {
    const onChangeDate = () => {
      // Do something...
    };
  };

  //子要素（数値)
  const Number = () => {
    const onChangeNumber = () => {
      // Do something...
    };
  };

  //中身確認 試し書き
  /*  function onFinder() {
    const testJson = JSON.parse(jsondata);

    for (let i = 0; i < testJson.length; i++) {
      //parent,childのKeyを持つ項目の場合
      if ("parent" in testJson[i] && "child" in testJson[i]) {
        console.log("ARI");
        if (i > 1) {
          let childName = testJson[i].child;
          let Items;
          let childStyle;

          if (childName) {
            let resutl = {};
            //子要素が複数
            for (let k = 0; k < childName.length; k++) {
              for (let j = 0; j < testJson.length; j++) {
                if (childName[k] === testJson[j].object_id) {
                  console.log(
                    "[総数]i:" + i + "[孫の数] k:" + k + " [孫要素]j:" + j
                  );
                  resutl = testJson[j];
                  console.log(resutl);
                  break;
                }
              }

              //style設定
              childStyle = {
                position: "absolute",
                height: resutl.height,
                width: resutl.width,
                top: resutl.height /5,
                left: resutl.width /5
              };

              //描画項目作成
              Items = React.createElement("div", {style:childStyle},`<input type:{${resutl.contents_type}}></input>`);
            }
          }
        }
      } else {
        console.log("NASHI");
      }
    }
  }
  */
}
