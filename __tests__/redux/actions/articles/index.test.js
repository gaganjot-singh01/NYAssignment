import * as actions from '../../../../src/redux/actions/articles';

describe('Articles', () => {
  test('should send action for articles data', () => {
    const data = { period: 1 };
    const expectedAction = {
      type: actions.FETCH_ARTICLES_DATA_REQUEST,
      payload: data
    };
    expect(actions.fetchArticlesData(data)).toEqual(expectedAction);
  });
});
