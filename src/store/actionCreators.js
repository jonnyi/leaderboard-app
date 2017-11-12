import axios from 'axios';
import actionTypes from './actionTypes';

export const updateTitle = (title) => {
  return {
    type: actionTypes.CHANGE_TABLE_TITLE,
    title: title
  };
};

export const updateRowCount = (rows) => {
  return {
    type: actionTypes.CHANGE_SHOW_COUNT,
    rowCount: rows
  };
};

export const updateLoadingFlag = (loading) => {
  return {
    type: actionTypes.UPDATE_LOADING_FLAG,
    loadingFlag: loading
  };
};

export const updateTableData = (dataScope = 'recent') => (dispatch) => {
  axios
    .get(`https://fcctop100.herokuapp.com/api/fccusers/top/${dataScope}`, {
      responseType: 'json'
    })
    .then(function(response) {
      dispatch({
        type: actionTypes.UPDATE_TABLE_DATA,
        scoreData: response.data
      });
      dispatch(updateLoadingFlag(false));
    })
    .catch(function(error) {
      console.info('Error collecting scoreboard data: ', error);
    });
};
