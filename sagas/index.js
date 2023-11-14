import { all, fork } from 'redux-saga/effects';
import { watchDecreaseCount, watchAddCount } from './count';
import { watchSetName } from './name';

export default function* rootSaga() {
  yield all([
    fork(watchAddCount),
    fork(watchDecreaseCount),
    fork(watchSetName),
  ]);
}
