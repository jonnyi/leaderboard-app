import actionTypes from './actionTypes';

export const tableTitle = (state = '', action = { type: null }) => {
  switch (action.type) {
    case actionTypes.CHANGE_TABLE_TITLE:
      return action.title;
  }
  return state;
};

export const rowCount = (state = 0, action = { type: null }) => {
  switch (action.type) {
    case actionTypes.CHANGE_SHOW_COUNT:
      return action.rowCount;
  }
  return state;
};

export const loadingFlag = (state = true, action = { type: null }) => {
  switch (action.type) {
    case actionTypes.UPDATE_LOADING_FLAG:
      return action.loadingFlag;
  }
  return state;
};

export const scoreData = (state = [], action = { type: null }) => {
  switch (action.type) {
    case actionTypes.UPDATE_TABLE_DATA:
      return action.scoreData;
  }
  return state;
};
