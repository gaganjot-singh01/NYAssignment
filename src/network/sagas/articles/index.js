import { takeLatest, call, put } from 'redux-saga/effects';
import {
  FETCH_ARTICLES_DATA_REQUEST,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_ERROR
} from '../../../redux/actions/articles';
import { makeNetworkCall } from '../..';
import { API_KEY, STATUS_CODE_200 } from '../../../utils/constants';
import { GET } from '../../../utils/constants/restRequestType';
import { GET_ARTICLE_ENDPOINT } from '../../../utils/constants/apiEndpoints';

export function getArticlesDataAPI(action) {
  const config = {
    method: GET,
    url: GET_ARTICLE_ENDPOINT.replace('period', action.payload.period).replace(
      'apiKey',
      API_KEY
    )
  };
  return makeNetworkCall(config);
}

export function* getArticlesData(action) {
  try {
    const response = yield call(getArticlesDataAPI, action);
    const { data = { data: {} } } = response;
    if (response.status === STATUS_CODE_200) {
      yield put({ type: FETCH_ARTICLES_SUCCESS, payload: data });
    } else {
      yield put({
        type: FETCH_ARTICLES_ERROR,
        payload: response
      });
    }
  } catch (error) {
    yield put({
      type: FETCH_ARTICLES_ERROR
    });
  }
}

export function* fetchArticlesDataWatcherSaga() {
  yield takeLatest(FETCH_ARTICLES_DATA_REQUEST, getArticlesData);
}
