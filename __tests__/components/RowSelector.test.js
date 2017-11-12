import React from 'react';
import { mount } from 'enzyme';
import RowSelector from '../../src/components/RowSelector';

describe('<RowSelector /> UI Component', () => {
  const changeFn = jest.fn();
  const wrapper = mount(
    <RowSelector rowCount={50} updateRowCount={changeFn} />
  );
  it('renders <form>', () => {
    expect(wrapper.find('form').length).toBe(1);
  });
  it('renders <select>', () => {
    expect(wrapper.find('select').length).toBe(1);
  });
  it('  ---| select "value" is set', () => {
    expect(wrapper.find('select').props().value).toBe(50);
  });
  it('  ---| select "onChange" function is set', () => {
    expect(wrapper.find('select').props().onChange).toBeDefined();
  });
  it('  ---| select change executes function', () => {
    wrapper.find('select').simulate('change');
    expect(changeFn).toHaveBeenCalled();
  });
  it('renders 4 <option> tags', () => {
    expect(wrapper.find('option').length).toBe(4);
  });
});
