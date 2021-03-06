import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationContainer } from "@react-navigation/native";
import ComponentA from "./component/ComponentA";
import ComponentA2 from "./component/ComponentA2";
import ComponentB from "./component/ComponentB";
import ComponentC from "./component/ComponentC";
import ComponentD from "./component/ComponentD";
import ComponentF from "./component/ComponentF";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComponentC />} />
        <Route path="/componentd" element={<ComponentD />} />
        <Route path="/componentf" element={<ComponentF />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
