import * as ActionCreators from '../../src/store/actionCreators';
import storeFactory from '../../src/store/storeFactory';

describe('Action creators', () => {
  let store;
  const testState = {
    tableTitle: 'Top scores in the last 30 days!',
    rowCount: 100,
    loadingFlag: true,
    scoreData: [
      {
        username: 'testuser1111',
        img: 'url',
        alltime: 9999,
        recent: 999,
        lastUpdate: '2017-11-06T18:36:18.523Z'
      },
      {
        username: 'testuser2222',
        img: 'url',
        alltime: 8888,
        recent: 888,
        lastUpdate: '2017-11-06T18:35:03.439Z'
      }
    ]
  };

  describe('updateTitle', () => {
    store = storeFactory(testState);
    it('should update the title', () => {
      store.dispatch(ActionCreators.updateTitle('Test title'));
      expect(store.getState().tableTitle).toBe('Test title');
    });
  });

  describe('updateRowCount', () => {
    store = storeFactory(testState);
    it('should update the rowCount', () => {
      store.dispatch(ActionCreators.updateRowCount(999));
      expect(store.getState().rowCount).toBe(999);
    });
  });

  describe('updateLoadingFlag', () => {
    store = storeFactory(testState);
    it('should update the updateLoadingFlag', () => {
      store.dispatch(ActionCreators.updateLoadingFlag(true));
      expect(store.getState().loadingFlag).toBe(true);
    });
  });
  // TODO:
  // describe('updateTableData', () => {
  //   store = storeFactory(testState);
  //   it('should update the updateTableData', () => {
  //     store.dispatch(ActionCreators.updateTableData('recent'));
  //     expect(store.getState().scoreData).toBe([]);
  //   });
  // });
});
