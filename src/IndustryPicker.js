import React, { Component } from "react";
import { Menu, Dropdown, Icon } from "antd";

const SubMenu = Menu.SubMenu;
const menu = (
  <Menu>
    <Menu.Item>Automotive</Menu.Item>
    <Menu.Item>Insurance</Menu.Item>
    <SubMenu title="Finance">
      <Menu.Item>Banking</Menu.Item>
      <Menu.Item>Fin Tech</Menu.Item>
    </SubMenu>
  </Menu>
);

export default class IndustryPicker extends Component {
  render() {
    return (
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" href="#">
          Select Industry <Icon type="down" />
        </a>
      </Dropdown>
    );
  }
}
