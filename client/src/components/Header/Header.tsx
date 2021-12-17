import { Menu } from "antd";
import { EditFilled, ShopFilled } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Header } from "./Header.styled";

interface IMainHeader {
  handleClick: any;
  state: string;
}

export const MainHeader: React.FC<IMainHeader> = ({ handleClick, state }) => {
  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <Header>
      <Menu onClick={handleClick} selectedKeys={[state]} mode="horizontal">
        <Menu.Item key="one" icon={<ShopFilled />}>
          All Products
        </Menu.Item>
        <Menu.Item key="two" icon={<EditFilled />}>
          Navigation Two
        </Menu.Item>
        <Menu.Item key="three">Navigation Three</Menu.Item>
      </Menu>
    </Header>
  );
};
