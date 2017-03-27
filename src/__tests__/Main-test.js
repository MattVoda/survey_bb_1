import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Main from '../Main';

test("radio button advances progress bar", () => {
  const component = shallow(
    <Main />
  );
  
  expect(component.html()).toMatchSnapshot();
});