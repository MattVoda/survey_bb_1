import React, { Component } from "react";
import { Button } from "antd";

export default class SubmitButton extends Component {
  render() {
    return (
      <div>
        <Button id="submit" type="primary">Submit</Button>
      </div>
    );
  }
}
