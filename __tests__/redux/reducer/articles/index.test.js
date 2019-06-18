import {
  FETCH_ARTICLES_DATA_REQUEST,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_ERROR
} from '../../../../src/redux/actions/articles';

import * as GLOBALS from '../../../../src/redux/reducers/globals';

import articles, {
  initialState
} from '../../../../src/redux/reducers/articles';

describe('Articles reducer', () => {
  test('should return the initial state', () => {
    const action = {
      payload: {}
    };
    expect(articles(undefined, action)).toEqual(initialState);
  });

  test('should return new state with isFetching true', () => {
    expect(
      articles(initialState, {
        type: FETCH_ARTICLES_DATA_REQUEST,
        payload: {}
      })
    ).toEqual({
      ...initialState,
      isFetching: true,
      fetchSuccess: false,
      fetchError: false,
      error: ''
    });
  });

  test('should return new state with fetchSuccess true', () => {
    expect(
      articles(initialState, {
        type: FETCH_ARTICLES_SUCCESS,
        payload: {}
      })
    ).toEqual({
      ...initialState,
      isFetching: false,
      fetchSuccess: true,
      fetchError: false,
      error: '',
      articlesData: {}
    });
  });

  test('should return new state with fetchError true', () => {
    expect(
      articles(initialState, {
        type: FETCH_ARTICLES_ERROR,
        payload: {}
      })
    ).toEqual({
      ...initialState,
      isFetching: false,
      fetchSuccess: false,
      fetchError: true,
      error: GLOBALS.error
    });
  });
});
