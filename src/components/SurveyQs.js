import React, {Component} from 'react';
import IndustryPicker from './IndustryPicker';
import SliderInput1 from './SliderInput';
import RadioInput1 from './RadioInput1';
import {InputNumber, Row, Col, message} from 'antd';
import {connect} from 'react-redux';
import { qResponsed } from '../actions/Actions_ALL';
function handleMenuClick (event) {

}
class SurveyQs extends Component {
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
            <IndustryPicker handleMenuClick={({key: answer}) => {
                message.success(`${answer} industry chosen `);
                this.props.answerQuestion({id: 1, answer });
            }} />
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  answerQuestion: ({id, answer}) => dispatch(qResponsed({id, answer}))
});

// var mapDispatchToProps = function(dispatch) {
//   return {
//     answerQuestion: function(data) {
//       var id = data.id;
//       var answer = data.answer;
//       return dispatch(qResponsed({id: id, answer: answer}));
//     }
//   }
// }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurveyQs);