import React, { Component, PropTypes } from 'react';

class InputForm extends Component {
 constructor(props) {
  super(props);
  this.state = {
    value: '',
  };
  this.handleChange = this.handleChange.bind(this);
 }
 handleChange(event) {
  this.setState({ value: event.target.value });
 }
 
 render() {
  return(
   <div>
    <input 
      type='text'
      value={this.state.value}
      onChange={this.handleChange}>
    </input>
   </div>
  )
 }
}

