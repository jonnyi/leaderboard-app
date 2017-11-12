import React from 'react';
import { mount } from 'enzyme';
import ResultsTable from '../../src/components/ResultsTable';

jest.mock('../../src/components/ResultsRow');
jest.mock('../../src/components/RowSelector');

describe('<ResultsTable /> UI Component', () => {
  const updateTableData = jest.fn();
  const updateTitle = jest.fn();
  const updateLoadingFlag = jest.fn();
  const loadingFlag = false;
  const scoreData = [
    {
      username: 'testuser',
      img: 'test/image.location',
      alltime: 9999,
      recent: 99,
      lastUpdate: '2017-11-06T18:36:18.523Z'
    }
  ];

  const wrapper = mount(
    <ResultsTable
      updateTableData={updateTableData}
      updateTitle={updateTitle}
      updateLoadingFlag={updateLoadingFlag}
      scoreData={scoreData}
      loadingFlag={loadingFlag}
    />
  );

  it('renders #results-table <div>', () => {
    expect(wrapper.find('#results-table').length).toBe(1);
  });

  it('renders <table>', () => {
    expect(wrapper.find('table').length).toBe(1);
  });

  it('renders <th> ctas with correct classes', () => {
    expect(wrapper.find('#recent-selector').hasClass('selected')).toBe(true);
    expect(wrapper.find('#alltime-selector').hasClass('selected')).toBe(false);
  });
  it('calls updateTableData once mounted', () => {
    expect(updateTableData).toHaveBeenCalled();
  });
  describe('clicking the "All time" <th> cta', () => {
    beforeAll(() => {
      wrapper.find('#alltime-selector').simulate('click');
    });

    it('adds selected class the the <th>', () => {
      expect(wrapper.find('#alltime-selector').hasClass('selected')).toBe(true);
    });

    it('calls updateTableData', () => {
      expect(updateTableData).toHaveBeenCalledWith('alltime');
    });
    it('calls updateLoadingFlag', () => {
      expect(updateLoadingFlag).toHaveBeenCalledWith(true);
    });
    it('calls updateTitle', () => {
      expect(updateTitle).toHaveBeenCalledWith('Top scores of all time!');
    });
  });

  describe('clicking the "Recent" <th> cta', () => {
    beforeAll(() => {
      wrapper.find('#recent-selector').simulate('click');
    });

    it('adds selected class the the <th>', () => {
      expect(wrapper.find('#recent-selector').hasClass('selected')).toBe(true);
    });

    it('calls updateTableData', () => {
      expect(updateTableData).toHaveBeenCalledWith('recent');
    });
    it('calls updateLoadingFlag', () => {
      expect(updateLoadingFlag).toHaveBeenCalledWith(true);
    });
    it('calls updateTitle', () => {
      expect(updateTitle).toHaveBeenCalledWith(
        'Top scores in the last 30 days!'
      );
    });
  });

  describe('when loadingFlag is true', () => {
    it('renders only "Loading..." <h2>', () => {
      const wrapper = mount(
        <ResultsTable
          updateTableData={updateTableData}
          updateTitle={updateTitle}
          updateLoadingFlag={updateLoadingFlag}
          scoreData={[]}
          loadingFlag={true}
        />
      );
      expect(wrapper.find('h2').length).toBe(1);
    });
  });
});
