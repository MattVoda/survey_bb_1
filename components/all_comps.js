import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import { Row, Col, Menu, Dropdown, Icon, InputNumber, Steps, Button, Slider, Radio } from 'antd';
import IndustryPicker from './industry_picker';

const Step = Steps.Step;
const RadioGroup = Radio.Group;

const SubMenu = Menu.SubMenu;
const menu = (
  <Menu>
    <Menu.Item>Automotive</Menu.Item>
    <Menu.Item>Insurance</Menu.Item>
    <SubMenu title="Finance">
      <Menu.Item>Banking</Menu.Item>
      <Menu.Item>Fin Tech</Menu.Item>
    </SubMenu>
  </Menu>
);

export default class Main extends Component {
    
    constructor(props) {
        super(props); //black magic
        this.state = {
            surveyStage:'0',
            industry: '',
            employeeCount: '',
            SliderInput1Value:'',
            RadioInput1Value:''
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
        return(
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

function SurveyPage(props) {
   return(
            <div style={{ margin: 100 }}>
                <ProgressBar surveyStage={props.surveyStage} />
                <SurveyQs  onStageSelect={props.onStageSelect} />
                <br/> <br/> <br/>
                <SubmitButton />
            </div>     
        ); 
}
/*class SurveyPage extends Component {
    render() {
        return(
            <div style={{ margin: 100 }}>
                <ProgressBar surveyStage={this.props.surveyStage} />
                <SurveyQs  onStageSelect={this.props.onStageSelect} />
                <br/> <br/> <br/>
                <SubmitButton />
            </div>     
        );
    }
}*/
 //TO-DO
class ResultsPage extends Component {
    render() {
        return(
            <div style={{ margin: 100 }}>

            </div>    
        );
    }
}

class ProgressBar extends Component {
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
        const parsedStage = parseInt(this.props.surveyStage);
        return(
            <Steps current={parsedStage}>
                <Step title="People" icon={<Icon type="user" />} />
                <Step title="Process" icon={<Icon type="solution" />} />
                <Step title="Technology" icon={<Icon type="credit-card" />} />
                <Step title="Results" icon={<Icon type="smile-o" />} />
            </Steps>
        );
    }
}

class SubmitButton extends Component {
    render() {
        return(
            <div>
                <Button id="submit" type="primary">Submit</Button>
            </div>
        )
    }
}

//for slider marks
const marks = {
    0: 'Early-stage DevOps',
    20: '',
    40: '',
    60: '',
    80: '',
    100: {
        label: <strong>DevOps at scale</strong>,
    },
};
//for slider tooltip
function formatter(value) {
  return `${value}%`;
}

class SliderInput1 extends Component {
    render() {
        return(
            <Slider step={20} marks={marks} tipFormatter={formatter}/>
        );
    }
}

class RadioInput1 extends Component {
    constructor(props) {
        super(props);
        this.handleStageSelectionChange = this.handleStageSelectionChange.bind(this);
    }
    handleStageSelectionChange(e){
        this.props.onStageSelect(e.target.value)
    }
    
    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
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


class SurveyQs extends Component {
    render(){
        return(
            <div>
                <hr />
                <br /><br />
                <Row>
                    <Col span = {10}>
                        <h3>Number of employees: </h3>
                    </Col>
                    <Col span={2}></Col>
                    <Col span = {12}>
                        <InputNumber min={1} max={100000} defaultValue={1000} />
                    </Col>
                </Row>
                <br /><br />
                <Row>
                    <Col span = {10}>
                        <h3>Industry: </h3>
                    </Col>
                    <Col span={2}></Col>
                    <Col span = {12}>
                        <IndustryPicker />
                    </Col>
                </Row>
                <br/><br/>
                <Row>
                    <Col span = {10}>
                        <h3>Agile teams are empowered at your company: </h3>
                    </Col>
                    <Col span={2}></Col>
                    <Col span = {12}>
                        <SliderInput1 />
                    </Col>
                </Row>
                <br/><br/> <br/>
                <Row>
                    <Col span = {10}>
                        <h3>Select a stage: </h3>
                    </Col>
                    <Col span={2}></Col>
                    <Col span = {12}>
                        <RadioInput1 onStageSelect={this.props.onStageSelect} />
                    </Col>
                </Row>
            </div>
        );
    }
}


