import React from "react";

import { Button, Card } from "antd";
import { IProducts } from "../../../app/Slices/Interfaces/AppInterfaces";
import { StyledContainer } from "../Styled/Antd.styledConainer";
import { FlexRaw } from "../Styled/FlexRow.styled";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { actions } from "../../../app/rootReducer";
const { Meta } = Card;

export const Products: React.FC<IProducts> = ({
  category,
  description,
  id,
  image,
  price,
  title,
  navigate,
}) => {
  const dispatch = useAppDispatch();

  function path(e: any) {
    navigate(`/products/${e.target.offsetParent.id}`);
  }

  function deleteProd(e: any) {
    if (e.target.closest(".ant-card").id < 21) {
      dispatch(actions.deleteProductPending(e.target.closest(".ant-card").id));
    } else {
      dispatch(
        actions.deleteCreatedProductPending({
          id: e.target.closest(".ant-card").id,
          navigate: navigate,
        })
      );
      navigate("/addedProducts");
    }
  }

  return (
    <StyledContainer onClick={path}>
      <Card
        key={id}
        id={`${id}`}
        hoverable
        style={{ width: 200 }}
        cover={<img alt="example" src={image} width={50} height={130} />}
      >
        <Meta title={title} description={category} />
        <Meta title={`price: ${price}`} />
        <FlexRaw>
          <Button
            id={`${id}`}
            htmlType="submit"
            onClick={(e: any) => navigate(`products/${e.target.id}/edit`)}
            type="primary"
          >
            Edit
          </Button>
          <Button onClick={deleteProd} type="primary" danger>
            Delete
          </Button>
        </FlexRaw>
      </Card>
    </StyledContainer>
  );
};
