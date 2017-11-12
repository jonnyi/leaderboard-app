import React from 'react';
import { mount } from 'enzyme';
import App from '../../src/components/App';
import storeFactory from '../../src/store/storeFactory';

jest.mock('../../src/components/ResultsTable');

const store = storeFactory();

describe('<App /> UI Component', () => {
  const wrapper = mount(<App store={store} />);
  it('renders correctly', () => {
    expect(wrapper.children().length).toBe(1);
  });
});
