import { takeEvery, put } from "redux-saga/effects";

export function* handleCount(action) {
    const {args} = action;
    yield put({type: 'SET_COUNT', args});
}

export function* watchAddCount(){
    yield takeEvery('ADD_COUNT', handleCount)
}

export function* watchDecreaseCount(){
    yield takeEvery('DECREASE_COUNT', handleCount)
}