import { Menu } from "antd";
import { EditFilled, ShopFilled, FormOutlined } from "@ant-design/icons";
import React from "react";
import { Header } from "./Header.styled";
import { Link } from "react-router-dom";

interface IMainHeader {
  setState: any;
  state: number;
}

export const MainHeader: React.FC<IMainHeader> = ({ state, setState }) => {


  // const handleClick = (e: any) => {
  //   setState(e.key);
  // };

  return (
    <Header>
      <Menu  selectedKeys={[`${state}`]} mode="horizontal">
        <Link to="/products">
          <Menu.Item  icon={<ShopFilled />}>
            All Products
          </Menu.Item>
        </Link>
        <Link to="/addProduct">
          <Menu.Item  icon={<EditFilled />}>
            Add New Product
          </Menu.Item>
        </Link>
        <Link to="/addedProducts">
          <Menu.Item icon={<FormOutlined />} >Added Products</Menu.Item>
        </Link>
      </Menu>
    </Header>
  );
};
