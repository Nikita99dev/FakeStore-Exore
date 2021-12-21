import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { MainHeader } from "./components/Header/Header";
import { ProductsMain } from "./components/MainLayout/ProductsMain/ProductsMain";
import { CenterDiv } from "./components/MainLayout/Styled/Center.styled";
import { Profile } from "./components/MainLayout/ProductsMain/ProductView";
import { AddProduct } from "./components/MainLayout/ProductAdd/AddPoducts";
import { AddedProductsMain } from "./components/MainLayout/AddedProducts/Main";
import { EditProduct } from "./components/EditProduct/EditProducts";

function App() {
  const [state, setState] = useState(1);

  return (
    <>
      <MainHeader state={state} setState={setState} />
      <CenterDiv>
        <Routes>
          <Route path="/products" element={<ProductsMain />} />
          <Route path="/products/:id" element={<Profile />} />
          <Route path="/products/:id/edit" element={<EditProduct />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/addedProducts" element={<AddedProductsMain />} />
        </Routes>
      </CenterDiv>
    </>
  );
}

export default App;
