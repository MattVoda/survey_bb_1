import React, { Component } from "react";
import IndustryPicker from "./IndustryPicker";
import SliderInput1 from "./SliderInput";
import RadioInput1 from "./RadioInput1";
import { InputNumber, Row, Col } from "antd";

export default class SurveyQs extends Component {
  render() {
    return (
      <div>
        <hr />
        <br /><br />
        <Row>
          <Col span={10}>
            <h3>Number of employees: </h3>
          </Col>
          <Col span={2} />
          <Col span={12}>
            <InputNumber min={1} max={100000} defaultValue={1000} />
          </Col>
        </Row>
        <br /><br />
        <Row>
          <Col span={10}>
            <h3>Industry: </h3>
          </Col>
          <Col span={2} />
          <Col span={12}>
            <IndustryPicker />
          </Col>
        </Row>
        <br /><br />
        <Row>
          <Col span={10}>
            <h3>Agile teams are empowered at your company: </h3>
          </Col>
          <Col span={2} />
          <Col span={12}>
            <SliderInput1 />
          </Col>
        </Row>
        <br /><br /> <br />
        <Row>
          <Col span={10}>
            <h3>Select a stage: </h3>
          </Col>
          <Col span={2} />
          <Col span={12}>
            <RadioInput1 onStageSelect={this.props.onStageSelect} />
          </Col>
        </Row>
      </div>
    );
  }
}
