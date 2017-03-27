import React, { Component } from "react";
import { Slider } from "antd";

//for slider marks
const marks = {
  0: "Early-stage DevOps",
  20: "",
  40: "",
  60: "",
  80: "",
  100: {
    label: <strong>DevOps at scale</strong>
  }
};
//for slider tooltip
function formatter(value) {
  return `${value}%`;
}

export default class SliderInput1 extends Component {
  render() {
    return <Slider step={20} marks={marks} tipFormatter={formatter} />;
  }
}
