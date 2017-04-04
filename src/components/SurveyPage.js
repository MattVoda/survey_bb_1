import React from "react";
import ProgressBar from "./ProgressBar";
import SurveyQs from "./SurveyQs";
import SubmitButton from "./SubmitButton";

export default function SurveyPage(props) {
  return (
    <div style={{ margin: 100 }}>
      <ProgressBar surveyStage={props.surveyStage} />
      <SurveyQs onStageSelect={props.onStageSelect} />
      <br /> <br /> <br />
      <SubmitButton />
    </div>
  );
}
