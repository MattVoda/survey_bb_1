export const PAGE_FORWARD = "PAGE_FORWARD";
export const PAGE_BACKWARD = "PAGE_BACKWARD";
export const ADD_Q_RESPONSE = "ADD_Q_RESPONSE";

export const pageForward = (surveyStage) => {
  console.log('current stage:', surveyStage);
  return {
      type: PAGE_FORWARD,
      surveyStage
  };
  //dispatch(pageForward(surveyStage));
}

export const pageBackward = (surveyStage) => {
  console.log('current stage:', surveyStage);
  return {
      type: PAGE_BACKWARD,
      surveyStage
  };
  //dispatch(pageBackward(surveyStage));
}


export const qResponsed = (qData) => {
  console.log('qData:' + qData);
  return {
      type: ADD_Q_RESPONSE,
      qData
  };
  //dispatch(qResponsed(qData));
}

//usage will look like:
//dispatch(pageForward(1))
//called from event handler