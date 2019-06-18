import 'react-native';
import { call, takeLatest, put } from 'redux-saga/effects';
import { cloneableGenerator } from 'redux-saga/utils';

import {
  fetchArticlesDataWatcherSaga,
  getArticlesData,
  getArticlesDataAPI
} from '../../../../src/network/sagas/articles';
import {
  FETCH_ARTICLES_DATA_REQUEST,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_ERROR
} from '../../../../src/redux/actions/articles';
import { STATUS_CODE_200, API_KEY } from '../../../../src/utils/constants';
import { GET } from '../../../../src/utils/constants/restRequestType';
import { GET_ARTICLE_ENDPOINT } from '../../../../src/utils/constants/apiEndpoints';
import * as networkCalls from '../../../../src/network';

describe('fetchArticlesDataWatcherSaga', () => {
  test('fetchArticlesDataWatcherSaga()', () => {
    const generator = fetchArticlesDataWatcherSaga();
    expect(generator.next().value).toEqual(
      takeLatest(FETCH_ARTICLES_DATA_REQUEST, getArticlesData)
    );
  });
});

describe('getArticlesData()', () => {
  const action = { type: FETCH_ARTICLES_DATA_REQUEST, payload: {} };
  const generator = cloneableGenerator(getArticlesData)(action);
  expect(generator.next().value).toEqual(call(getArticlesDataAPI, action));

  test('Response is successful from getArticlesData API', () => {
    const response = {
      status: STATUS_CODE_200,
      data: {}
    };
    const clone = generator.clone();
    expect(clone.next(response).value).toEqual(
      put({
        type: FETCH_ARTICLES_SUCCESS,
        payload: {}
      })
    );
  });

  test('Response is a failure from getArticlesData API', () => {
    const response = {
      status: null,
      data: {
        data: {}
      }
    };
    const clone = generator.clone();
    expect(clone.next(response).value).toEqual(
      put({
        type: FETCH_ARTICLES_ERROR,
        payload: response
      })
    );
  });

  test('An Exception is thrown in getArticlesData', () => {
    const error = {};
    const clone = generator.clone();
    expect(clone.throw(error).value).toEqual(
      put({
        type: FETCH_ARTICLES_ERROR
      })
    );
  });

  test('Response.status is null in getArticlesData', () => {
    const response = {
      status: null,
      data: {
        data: {}
      }
    };
    const clone = generator.clone();
    expect(clone.next(response).value).toEqual(
      put({
        type: FETCH_ARTICLES_ERROR,
        payload: response
      })
    );
  });

  test('Response.status is a undefined in getArticlesData', () => {
    const response = {
      status: undefined,
      data: {
        data: {}
      }
    };
    const clone = generator.clone();
    expect(clone.next(response).value).toEqual(
      put({
        type: FETCH_ARTICLES_ERROR,
        payload: response
      })
    );
  });

  test('status not received in getArticlesData', () => {
    const response = {
      data: {
        data: {}
      }
    };
    const clone = generator.clone();
    expect(clone.next(response).value).toEqual(
      put({
        type: FETCH_ARTICLES_ERROR,
        payload: response
      })
    );
  });

  test('No response is recieved in getArticlesData', () => {
    const clone = generator.clone();
    expect(clone.next().value).toEqual(
      put({
        type: FETCH_ARTICLES_ERROR
      })
    );
  });

  test('data not received in getArticlesData', () => {
    const response = {};
    const clone = generator.clone();
    expect(clone.next(response).value).toEqual(
      put({
        type: FETCH_ARTICLES_ERROR,
        payload: response
      })
    );
  });
});

describe('Request for fetch the article data', () => {
  test('Request for fetch the article API', () => {
    const action = {
      type: FETCH_ARTICLES_DATA_REQUEST,
      payload: {
        period: 1
      }
    };
    const config = {
      method: GET,
      url: GET_ARTICLE_ENDPOINT.replace(
        'period',
        action.payload.period
      ).replace('apiKey', API_KEY)
    };
    const spy = jest.spyOn(networkCalls, 'makeNetworkCall');
    getArticlesDataAPI(action);
    expect(spy).toHaveBeenCalledWith(config);
  });
});
