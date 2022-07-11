import { useNavigate } from "react-router-dom";
import { DropArea } from "./DropArea";

const ComponentA = () => {
  const navigate = useNavigate();

  const handleDrop = async (e) => {
    const item = e.dataTransfer.items[0]; // ※1
    const entry = item.webkitGetAsEntry(); // ※2
    if (entry.isFile) {
      const file = await new Promise((resolve) => {
        entry.file((file) => {
          // ※3
          resolve(file);
        });
      });

      console.log("これはファイルです", file);
    } else if (entry.isDirectory) {
      console.log("これはディレクトリです");
    }
  };

  return (
    <div>
      <p>ComponentA</p>
      <button onClick={() => navigate("/componentb")}>画面遷移します！</button>

      <br />
      <br />
      <br />
      <DropArea onDrop={handleDrop}>
        <div
          style={{ width: 600, height: 300, border: "solid", borderWidth: 2 }}
        >
          ドロップエリア
        </div>
      </DropArea>
    </div>
  );
};
export default ComponentA;
