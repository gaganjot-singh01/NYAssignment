import { fork } from 'redux-saga/effects';
import { fetchArticlesDataWatcherSaga } from './articles';

/**
 * combine and run all sagas
 * yield array takes in fork(sagaWatcher) objects
 */
export default function* rootSaga() {
  yield [fork(fetchArticlesDataWatcherSaga)];
}
