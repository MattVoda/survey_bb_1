import React, { Component } from "react";
import { Radio } from "antd";

const RadioGroup = Radio.Group;

export default class RadioInput1 extends Component {
  constructor(props) {
    super(props);
    this.handleStageSelectionChange = this.handleStageSelectionChange.bind(
      this
    );
  }
  handleStageSelectionChange(e) {
    this.props.onStageSelect(e.target.value);
  }

  render() {
    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px"
    };
    return (
      <RadioGroup onChange={this.handleStageSelectionChange}>
        <Radio style={radioStyle} value={0}>People</Radio>
        <Radio style={radioStyle} value={1}>Process</Radio>
        <Radio style={radioStyle} value={2}>Technology</Radio>
        <Radio style={radioStyle} value={3}>Results</Radio>
      </RadioGroup>
    );
  }
}
