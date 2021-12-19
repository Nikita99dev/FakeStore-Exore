import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { actions } from "../../../app/rootReducer";
import { IProducts } from "../../../app/Slices/Interfaces/AppInterfaces";
import { MainDiv } from "../Styled/MainDiv.styled";
import { MPagination } from "./Pagination";
import { Products } from "./ProdFromFakeStore";

export const ProductsMain: React.FC<{ state: string }> = () => {
  const { products } = useAppSelector((state) => state.products);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actions.fetchAllProductsPending());
  }, [dispatch]);

  useEffect(() => {
    console.log(products);
  }, [products]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  function paginate(number: number) {
    setCurrentPage(number);
  }
  return (
    <>
      <MainDiv>
        {currentPosts.map((item: IProducts) => {
          return (
            <Products
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
};
