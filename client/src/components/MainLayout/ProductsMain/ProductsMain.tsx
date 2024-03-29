import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { actions } from "../../../app/rootReducer";
import { IProducts } from "../../../app/Slices/Interfaces/AppInterfaces";
import { MainDiv } from "../Styled/MainDiv.styled";
import { MPagination } from "./Pagination";
import { Products } from "./ProdFromFakeStore";
import { Space, Spin } from "antd";
import { CenterDiv } from "../Styled/Center.styled";
import { useNavigate } from "react-router-dom";

export const ProductsMain: React.FC = () => {
  let navigate = useNavigate();

  const productsS = useAppSelector((state) => state.products);

  const { products } = productsS;

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!products.length) dispatch(actions.fetchAllProductsPending());
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  function paginate(number: number) {
    setCurrentPage(number);
  }

  if (productsS.isLoading) {
    return (
      <CenterDiv>
        <Space size="middle">
          <Spin size="large" />
        </Space>
      </CenterDiv>
    );
  } else {
    return (
      <>
        <MainDiv>
          {currentPosts.map((item: IProducts) => {
            return (
              <Products
                navigate={navigate}
                key={item.id}
                id={item.id}
                category={item.category}
                description={item.description}
                image={item.image}
                price={item.price}
                title={item.title}
              />
            );
          })}
        </MainDiv>
        <MPagination
          currentPage={currentPage}
          totalPosts={products.length}
          postsPerPage={postsPerPage}
          paginate={paginate}
        />
      </>
    );
  }
};
