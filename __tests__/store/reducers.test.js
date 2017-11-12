import actionTypes from '../../src/store/actionTypes';
import {
  tableTitle,
  rowCount,
  loadingFlag,
  scoreData
} from '../../src/store/reducers';

describe('Table title reducer : tableTitle', () => {
  it('CHANGE_TABLE_TITLE succeeds', () => {
    const state = 'Initial test title';
    const action = {
      type: actionTypes.CHANGE_TABLE_TITLE,
      title: 'Updated title text!'
    };

    expect(tableTitle(state, action)).toEqual('Updated title text!');
  });
  it('Default for no parameters', () => {
    expect(tableTitle()).toEqual('');
  });
});

describe('Show row count reducer : rowCount', () => {
  it('CHANGE_SHOW_COUNT succeeds', () => {
    const state = 111;
    const action = {
      type: actionTypes.CHANGE_SHOW_COUNT,
      rowCount: 222
    };

    expect(rowCount(state, action)).toEqual(222);
  });
  it('Default for no parameters', () => {
    expect(rowCount()).toEqual(0);
  });
});

describe('Loading flag reducer : loadingFlag', () => {
  it('UPDATE_LOADING_FLAG succeeds', () => {
    const state = false;
    const action = {
      type: actionTypes.UPDATE_LOADING_FLAG,
      loadingFlag: true
    };

    expect(loadingFlag(state, action)).toEqual(true);
  });
  it('Default for no parameters', () => {
    expect(loadingFlag()).toEqual(true);
  });
});

describe('Score data reducer : scoreData', () => {
  it('UPDATE_TABLE_DATA succeeds', () => {
    const state = [];
    const action = {
      type: actionTypes.UPDATE_TABLE_DATA,
      scoreData: [
        {
          username: 'testuser',
          img: 'test/image.location',
          alltime: 9999,
          recent: 99,
          lastUpdate: '2017-11-06T18:36:18.523Z'
        }
      ]
    };

    expect(scoreData(state, action)).toEqual([
      {
        username: 'testuser',
        img: 'test/image.location',
        alltime: 9999,
        recent: 99,
        lastUpdate: '2017-11-06T18:36:18.523Z'
      }
    ]);
  });
  it('Default for no parameters', () => {
    expect(scoreData()).toEqual([]);
  });
});
