import { BrowserRouter, Routes, Route } from "react-router-dom";
import ComponentA from "./component/ComponentA";
import ComponentA2 from "./component/ComponentA2";
import ComponentB from "./component/ComponentB";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComponentA2 />} />
        <Route path="/" element={<ComponentA />} />
        <Route path="/componentb" element={<ComponentB />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
