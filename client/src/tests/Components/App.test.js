/* global expect, describe, test, beforeEach, shallow  */
// import { shallow } from 'enzyme';
import React from 'react';
import App from '../../Components/App.jsx';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });
  test('App renders without crashing', () => {
    expect(wrapper.exists()).toEqual(true);
  });
  test('App matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
