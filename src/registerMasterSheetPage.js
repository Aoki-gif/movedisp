import React, { useState } from "react";
export default function RegisterMasterSheetPage() {
  const [selectedFile, setSelectedFile] = useState();
  const [sheetName, setSheetName] = useState("");

  function onChange(event) {
    setSelectedFile(event.target.files[0]);
  }

  function onChangeText(event) {
    setSheetName(event.target.value);
  }

  function onSubmit() {
    const formData = new FormData();

    formData.append("File", selectedFile);
    formData.append("sheetName", sheetName);

    fetch("https://kh1rkj.csb.app/upload_master", {
      method: "POST",
      body: formData
    });
  }
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div style={{ width: "40%", height: "40%", margin: "auto" }}>
        <span>シート名</span>
        <input type="text" onChange={onChangeText}></input>
        <input
          type="file"
          name="file"
          onChange={onChange}
          accept=".json"
          style={{ display: "block" }}
        ></input>
        <button onClick={onSubmit}>アップロード</button>
      </div>
    </div>
  );
}
