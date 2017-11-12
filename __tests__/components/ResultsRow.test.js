import React from 'react';
import { shallow } from 'enzyme';
import ResultsRow from '../../src/components/ResultsRow';

describe('<ResultsRow /> UI Component', () => {
  const data = {
    username: 'testuser',
    img: 'http://imageurl.com',
    alltime: 9999,
    recent: 99
  };
  const wrapper = shallow(<ResultsRow rowData={data} rowNumber={1} />);

  it('renders <tr>', () => {
    expect(wrapper.find('tr').length).toBe(1);
  });
  describe('renders # <td>', () => {
    it('renders # <td>', () => {
      expect(
        wrapper
          .find('td')
          .at(0)
          .text()
      ).toBe('1');
    });
  });
  describe('renders name <td>', () => {
    it('renders <img> with url', () => {
      expect(wrapper.find('img').props().src).toBe('http://imageurl.com');
    });
    it('renders <a> with href to profile', () => {
      expect(wrapper.find('a').props().href).toBe(
        'https://www.freecodecamp.com/testuser'
      );
    });
    it('renders <a> with username', () => {
      expect(wrapper.find('a').text()).toBe('testuser');
    });
  });
  describe('renders recent score <td>', () => {
    it('shows score', () => {
      expect(
        wrapper
          .find('td')
          .at(2)
          .text()
      ).toBe('99');
    });
  });
  describe('renders recent score <td>', () => {
    it('shows score', () => {
      expect(
        wrapper
          .find('td')
          .at(3)
          .text()
      ).toBe('9999');
    });
  });
});
