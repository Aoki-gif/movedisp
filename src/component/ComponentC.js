import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ComponentC() {
  //画面移動用
  const navigate = useNavigate();

  //選択ファイル
  const [selectedFile, setSelectedFile] = useState("");
  const [sheetName, setSheetName] = useState("");
  const [jsondata, setJsonData] = useState("");

  const [ContentsData, setContents] = useState("");

  //選択ファイル保持および変数更新
  function onChange(event) {
    setSelectedFile(event.target.files[0]);
    //console.log(selectedFile);
  }

  useEffect(() => {
    console.log("useEffect");
    //console.log(selectedFile);

    if (selectedFile !== "") {
      //FileReaderのインスタンスを作成する
      var reader = new FileReader();
      //読み込んだファイルの中身を取得する
      reader.readAsText(selectedFile);
      reader.addEventListener("load", function () {
        //console.log(JSON.parse(reader.result));
        //ファイルの中身を設定
        setJsonData(reader.result);
      });
    }
  }, [selectedFile]);

  //表示ボタン押下時処理
  //画面遷移および取得ファイルの受け渡し
  function onSubmit() {
    //画面遷移
    navigate("/componentd", { state: jsondata });
  }

  function onShow() {
    const test = JSON.parse(jsondata);
    const result = test.filter((data) => {
      return data.contents_type != null;
    });
    const result1 = test.filter((data) => {
      return data.parent?.length > 0;
    });
    setContents(result);
    setContents(result1);
  }

  function onTest() {
    //画面遷移
    navigate("/componentf", { state: jsondata });
  }

  useEffect(() => {
    console.log("useEffect - ContensData");
    //console.log(selectedFile);
    console.log(ContentsData);
  }, [ContentsData]);

  //画面作成処理
  return (
    <div>
      <div style={{ width: "40%", height: "40%", margin: "auto" }}>
        <input
          type="file"
          name="file"
          onChange={onChange}
          accept=".json"
          style={{ display: "block" }}
        ></input>
        <button style={{ width: "40%", height: "40%" }} onClick={onSubmit}>
          表示
        </button>
        <button style={{ width: "40%", height: "40%" }} onClick={onShow}>
          確認
        </button>
        <button style={{ width: "40%", height: "40%" }} onClick={onTest}>
          Test
        </button>
      </div>
    </div>
  );
}
