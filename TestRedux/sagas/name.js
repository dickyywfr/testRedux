import {takeEvery, put} from 'redux-saga/effects'

export function* handleName(action) {
    const {args} = action;
    yield put({type: 'SET_NAME', args});
}

export function* watchSetName(){
    yield takeEvery('SET_NAME', handleName)
}