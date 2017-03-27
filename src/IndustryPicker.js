import React, { Component } from "react";
import { Menu, Dropdown, Icon, message } from "antd";

function handleMenuClick (event) {
  message.success(`${event.item.props.industry} industry chosen `);
  console.log(event);
}

const SubMenu = Menu.SubMenu;
const menu = (
  <Menu onClick={ handleMenuClick }>
    <Menu.Item industry="Automotive">Automotive</Menu.Item>
    <Menu.Item industry="Insurance">Insurance</Menu.Item>
    <SubMenu title="Finance" industry="Finance">
      <Menu.Item industry="Banking">Banking</Menu.Item>
      <Menu.Item industry="Fin Tech">Fin Tech</Menu.Item>
    </SubMenu>
  </Menu>
);

export default class IndustryPicker extends Component {
  render() {
    return (
      <Dropdown overlay={ menu } >
        <a className="ant-dropdown-link" id="industryPickerDisplay" href="#">
         Select Industry <Icon type="down" />
        </a>
      </Dropdown>
    );
  }
}
