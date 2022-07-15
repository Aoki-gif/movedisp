import React, { useState, useEffect } from "react";
import { useWindowSize } from "react-use";
import { useLocation } from "react-router-dom";
import { render } from "react-dom";
import Pearent from "../component/Pearent";

export default function ComponentF() {
  console.log("親要素-情報作成");
  //ルート使用用変数
  const location = useLocation();
  //画面サイズ取得(使用画面)
  const { width, height } = useWindowSize();
  const jsonData = JSON.parse(location.state);

  //コンテンツデータ
  const [ContentsData, setContents] = useState();
  const [PearentssData, setPearents] = useState();

  //コンテンツの要素だけ取得
  const ContentItems = jsonData?.filter((data) => {
    return data.contents_type != null;
  });

  //Pearents,childを持つ要素だけ取得
  const PearentsItems = jsonData?.filter((data) => {
    return data.parent?.length > 0 && data.child != null;
  });

  useEffect(() => {
    setContents(ContentItems);
    setPearents(PearentsItems);
  }, []);

  //コンテンツデータ　更新
  useEffect(() => {
    console.log("useEffect - ContensData");
    //console.log(selectedFile);
    console.log("親要素-子要素：");
    console.log(ContentItems);
  }, [ContentsData]);

  //コンテンツデータ　更新
  useEffect(() => {
    //console.log(selectedFile);
    console.log("親要素-親＆子要素：");
    console.log(PearentsItems);
  }, [PearentssData]);

  return PearentsItems?.map((json, index) => {
    //子要素の親名が一致するか
    let content = ContentItems.filter((contItem) => {
      return contItem.parent[0] === json.object_id;
    });
    if (content.length > 0) {
      //子要素が親要素と一致していた場合、描画する
      return (
        <Pearent
          PearentsData={json}
          ContentsData={content}
          h={height}
          w={width}
          mainsizeW={jsonData[0].width}
          mainsizeH={jsonData[0].height}
        />
      );
    } else {
      return <div>aaaaaa</div>;
    }
  });
}
