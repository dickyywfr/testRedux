import {fork} from 'redux-saga/effects';
import {watchDecreaseCount, watchAddCount} from './count';
import { watchSetName } from './name';

export default function* rootSaga() {
    yield [
        yield fork(watchAddCount),
        yield fork(watchDecreaseCount),
        yield fork(watchSetName)
    ];
}