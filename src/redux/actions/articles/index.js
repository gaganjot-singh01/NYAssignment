export const FETCH_ARTICLES_DATA_REQUEST = 'FETCH_ARTICLES_REQUEST';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_ERROR = 'FETCH_ARTICLES_ERROR';

export function fetchArticlesData(data) {
  return {
    type: FETCH_ARTICLES_DATA_REQUEST,
    payload: data
  };
}
