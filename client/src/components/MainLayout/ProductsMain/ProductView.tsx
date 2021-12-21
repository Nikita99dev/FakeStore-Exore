import { Card, Avatar, Collapse, Spin, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IProducts } from "../../../app/Slices/Interfaces/AppInterfaces";
import { actions } from "../../../app/rootReducer";
import { CenterDiv } from "../Styled/Center.styled";
import { StyledContainer } from "../Styled/Antd.styledConainer";

const { Meta } = Card;
const { Panel } = Collapse;

export const Profile: React.FC = () => {
  const prodState = useAppSelector((state) => state);

  const [state, setState] = useState<IProducts[]>([]);

  const { products, addedProducts } = prodState;

  useEffect(() => {
    if (addedProducts.products2.length && products.products.length) {
      setState([...addedProducts.products2, ...products.products]);
      console.log(addedProducts.products2);
    } else if (products.products.length) {
      setState([...products.products]);
    } else if (addedProducts.products2.length) {
      setState([...addedProducts.products2]);
    } else {
      setState([]);
    }
  }, [setState]);

  const dispatch = useAppDispatch();

  let navigate = useNavigate();

  let { id } = useParams();

  const [current, setCurrent] = useState<IProducts>();

  useEffect(() => {
    if (state?.length) {
      const cur = state?.filter((el: any) => el.id === Number(id));
      return setCurrent((prev) => (prev = cur[0]));
    } else if (id || 0 < 21) {
      dispatch(actions.fetchCurrentProductPending(id));
    }
  }, [dispatch, id, state]);

  function deleteProd(e: any) {
    if (Number(id) < 21) {
      dispatch(actions.deleteProductPending(id));
      navigate("/products");
    } else {
      dispatch(
        actions.deleteCreatedProductPending({
          id,
          navigate: navigate,
        })
      );
    }
  }

  if (products.isLoading || addedProducts.isLoading) {
    return (
      <CenterDiv>
        <Space size="middle">
          <Spin size="large" />
        </Space>
      </CenterDiv>
    );
  } else {
    return (
      <StyledContainer>
        <Card
          style={{ width: 300 }}
          id={`${current?.id || products.current?.id}`}
          cover={
            <img
              alt="example"
              src={current?.image || products.current?.image}
              height={200}
            />
          }
          actions={[
            <DeleteOutlined key="delete" onClick={deleteProd} />,
            <EditOutlined
              key="edit"
              onClick={() => navigate(`/products/${id}/edit`)}
            />,
          ]}
        >
          <Meta
            title={current?.title || products.current?.title}
            description={`${current?.price || products.current?.price} $`}
          />
          <Collapse>
            <Panel header="Expand Description" key="1">
              <p>{current?.description || products.current?.description}</p>
            </Panel>
          </Collapse>
        </Card>
      </StyledContainer>
    );
  }
};
