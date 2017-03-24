import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/all_comps.js';
import './index.css';
//import { Row, Col, Menu, Dropdown, Icon, InputNumber, Steps, Button } from 'antd';

//import { InputNumber } from 'antd';
//import { Row, Col } from 'antd';
//import IndustryPicker from './components/industry_picker';



function App() {
  return (
    <div style={{ margin: 100 }}>
      <Main />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

function onChange(value) {
  console.log('changed', value);
}