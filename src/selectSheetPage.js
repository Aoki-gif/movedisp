import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function SelectSheetPage() {
  const [sheetList, setSheetList] = useState();
  useEffect(() => {
    fetch("https://kh1rkj.csb.app/ls/sheet")
      .then((data) => data.json())
      .then(setSheetList);
    console.log(setSheetList);
  }, []);

  return (
    <SheetListContainer data={sheetList} renderProp={<p>now loading...</p>} />
  );
}

function SheetListContainer({ data = [], renderProp }) {
  if (!data.length) return renderProp;

  return data.map((e) => <SheetListContainerItem data={e} />);
}

function SheetListContainerItem({ data }) {
  return (
    <div>
      <Link to="/edit/sheet/exist_sheet" state={{ id: data.id }}>
        {data.id}
      </Link>
    </div>
  );
}
