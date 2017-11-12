import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { tableTitle, rowCount, loadingFlag, scoreData } from './reducers';

const logger = ({ getState }) => {
  return (next) => (action) => {
    //console.info('Action to dispatch:', action);
    let returnValue = next(action);
    //console.info('state after dispatch', getState());
    return returnValue;
  };
};

const reducers = combineReducers({
  tableTitle,
  rowCount,
  loadingFlag,
  scoreData
});
const initialState = {
  tableTitle: 'Top scores in the last 30 days!',
  rowCount: 100,
  loadingFlag: true,
  scoreData: []
};

const middleware = () => [thunk, logger];

const storeFactory = (state = initialState) =>
  applyMiddleware(...middleware())(createStore)(
    reducers,
    state,
    window.devToolsExtension && window.devToolsExtension()
  );

export default storeFactory;
