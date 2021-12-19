import { Menu } from "antd";
import { EditFilled, ShopFilled } from "@ant-design/icons";
import React, { useEffect } from "react";
import { Header } from "./Header.styled";
import { Link } from "react-router-dom";

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
        <Link to="/products">
          <Menu.Item key="one" icon={<ShopFilled />}>
            All Products
          </Menu.Item>
        </Link>
        <Link to="/addProduct">
          <Menu.Item key="two" icon={<EditFilled />}>
            Navigation Two
          </Menu.Item>
        </Link>
        <Link to="/">
          <Menu.Item key="three">Navigation Three</Menu.Item>
        </Link>
      </Menu>
    </Header>
  );
};
