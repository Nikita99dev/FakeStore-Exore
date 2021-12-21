import { Space, Spin } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { Empty } from 'antd';

import { IProducts } from "../../../app/Slices/Interfaces/AppInterfaces";
import { MPagination } from "../ProductsMain/Pagination";
import { Products } from "../ProductsMain/ProdFromFakeStore";
import { CenterDiv } from "../Styled/Center.styled";
import { MainDiv } from "../Styled/MainDiv.styled";

export const AddedProductsMain: React.FC<{ state?: string }> = () => {
  const productsS = useAppSelector((state) => state.addedProducts);

  const { products2 } = productsS;

  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products2.slice(indexOfFirstPost, indexOfLastPost);

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
  } else if (products2.length) {
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
          totalPosts={products2.length}
          postsPerPage={postsPerPage}
          paginate={paginate}
        />
      </>
    );
  } else {
    return <Empty />
  }
};
