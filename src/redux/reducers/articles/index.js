import * as GLOBALS from '../globals';

import {
  FETCH_ARTICLES_DATA_REQUEST,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_ERROR
} from '../../actions/articles';

export const initialState = {
  ...GLOBALS
};

const articles = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_ARTICLES_DATA_REQUEST:
      return {
        ...state,
        isFetching: true,
        fetchSuccess: false,
        fetchError: false,
        error: ''
      };

    case FETCH_ARTICLES_SUCCESS:
      console.log('payload', payload);
      return {
        ...state,
        isFetching: false,
        fetchSuccess: true,
        fetchError: false,
        error: '',
        articlesData: payload
      };

    case FETCH_ARTICLES_ERROR:
      return {
        ...state,
        isFetching: false,
        fetchSuccess: false,
        fetchError: true,
        error: GLOBALS.error
      };

    default:
      return state;
  }
};
export default articles;
