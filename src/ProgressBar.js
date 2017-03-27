import React, { Component } from "react";
import { Steps, Icon } from "antd";

const Step = Steps.Step;

export default class ProgressBar extends Component {
  render() {
    /*
        var status1, status2, status3, status4;
        if(this.props.surveyStage == 0){
            status1 = "process";
            status2, status3, status4 = "wait";
        } else if (this.props.surveyStage == 1){
            status1 = "finish";
            status2 = "process";
            status3, status4 = "wait";
        } else if (this.props.surveyStage == 2){
            status1, status2 = "finish";
            status3 = "process";
            status4 = "wait";
        } else if (this.props.surveyStage == 3){
            status1, status2, status3 = "finish";
            status4 = "process";
        }

        return(
            <Steps current={surveyStage}>
                <Step status={status1} title="People" icon={<Icon type="user" />} />
                <Step status={status2} title="Process" icon={<Icon type="solution" />} />
                <Step status={status3} title="Technology" icon={<Icon type="credit-card" />} />
                <Step status={status4} title="Results" icon={<Icon type="smile-o" />} />
            </Steps>
        );
        */
    const parsedStage = parseInt(this.props.surveyStage, 10);
    return (
      <Steps current={parsedStage}>
        <Step title="People" icon={<Icon type="user" />} />
        <Step title="Process" icon={<Icon type="solution" />} />
        <Step title="Technology" icon={<Icon type="credit-card" />} />
        <Step title="Results" icon={<Icon type="smile-o" />} />
      </Steps>
    );
  }
}
