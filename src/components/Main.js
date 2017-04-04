import React, { Component } from "react";
import SurveyPage from "./SurveyPage";
import ResultsPage from "./ResultsPage";

export default class Main extends Component {
  constructor(props) {
    super(props); //black magic
    this.state = {
      surveyStage: "0",
      industry: "",
      employeeCount: "",
      SliderInput1Value: "",
      RadioInput1Value: ""
    };
    //this.handleChange = this.handleChange.bind(this);
    this.handleStageSelection = this.handleStageSelection.bind(this);
  }

  handleStageSelection(surveyStage) {
    this.setState({
      surveyStage: surveyStage
    });
  }

  // look up spread {{...state}}
  render() {
    return (
      <div>
        <SurveyPage
          surveyStage={this.state.surveyStage}
          industry={this.state.industry}
          employeeCount={this.state.employeeCount}
          SliderInput1Value={this.state.SliderInput1Value}
          RadioInput1Value={this.state.RadioInput1Value}
          onStageSelect={this.handleStageSelection}
        />
        <ResultsPage
          industry={this.state.industry}
          employeeCount={this.state.employeeCount}
          SliderInput1Value={this.state.SliderInput1Value}
          RadioInput1Value={this.state.RadioInput1Value}
        />
      </div>
    );
  }
}
