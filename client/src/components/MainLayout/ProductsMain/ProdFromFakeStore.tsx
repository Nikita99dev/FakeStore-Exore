import React from "react";

import { Button, Card } from "antd";
import { IProducts } from "../../../app/Slices/Interfaces/AppInterfaces";
import { StyledContainer } from "../Styled/Antd.styledConainer";
import { FlexRaw } from "../Styled/FlexRow.styled";
const { Meta } = Card;

export const Products: React.FC<IProducts> = ({
  category,
  description,
  id,
  image,
  price,
  title,
}) => {
  return (
    <StyledContainer>
      <Card
        key={id}
        id={`${id}`}
        hoverable
        style={{ width: 190 }}
        cover={<img alt="example" src={image} width={50} height={130}/>}
        // onClick={(e)=>console.log(e)}
      >
        <Meta title={title} description={category} />
        <Meta title={`price: ${price}`} />
        <FlexRaw>
        <Button type="primary">Edit</Button>
        <Button type="primary" danger>
          Delete
        </Button>
        </FlexRaw>
      </Card>
    </StyledContainer>
  );
};
