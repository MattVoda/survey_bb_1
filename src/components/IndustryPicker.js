import React, { Component } from "react";
import { Menu, Dropdown, Icon } from "antd";



const SubMenu = Menu.SubMenu;


export default class IndustryPicker extends Component {
  render() {
    const menu = (
      <Menu onClick={ this.props.handleMenuClick }>
        <Menu.Item key="Automotive">Automotive</Menu.Item>
        <Menu.Item key="Insurance">Insurance</Menu.Item>
        <SubMenu title="Finance" key="Finance">
          <Menu.Item key="Banking">Banking</Menu.Item>
          <Menu.Item key="Fin Tech">Fin Tech</Menu.Item>
        </SubMenu>
      </Menu>
    );

    return (
      <Dropdown overlay={ menu } >
        <a className="ant-dropdown-link" id="industryPickerDisplay" href="#">
         Select Industry <Icon type="down" />
        </a>
      </Dropdown>
    );
  }
}
