import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { MainHeader } from "./components/Header/Header";
import { ProductsMain } from "./components/MainLayout/ProductsMain/ProductsMain";

function App() {
  const [state, setState] = useState("one");

  const handleClick = (e: any) => {
    console.log("click ", e);
    setState(e.key);
  };

  return (
    <>
      <MainHeader handleClick={handleClick} state={state} />
      <Routes>
        <Route path="/products" element={<ProductsMain state={state} />}>
          <Route path=":id" element={<ProductsMain state={state} />} />
        </Route>
        <Route path='/addProduct'element={<div>Hello</div>}/>
      </Routes>
    </>
  );
}

export default App;
