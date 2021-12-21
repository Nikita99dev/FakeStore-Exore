import { Pagination } from "antd";
import React from "react";
import { Bottom } from "../Styled/Bottom.styled";

export const MPagination: React.FC<{
  paginate: any;
  totalPosts: number;
  postsPerPage: number;
  currentPage: number;
}> = ({ totalPosts, postsPerPage, paginate, currentPage }) => {
  return (
    <Bottom>
      <Pagination
        onChange={paginate}
        current={currentPage}
        total={totalPosts}
        pageSize={postsPerPage}
      />
    </Bottom>
  );
};
