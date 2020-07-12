import { 
  put, 
  takeEvery, 
  all, 
  fork,
  call,
  take,
  takeLatest,
  takeLeading,
  takeMaybe,
  flush,
  putResolve
} from 'redux-saga/effects';
import { ADD_ONE, ADD_ONE_ASYNC } from '../actions';

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export function* helloSaga() {
  yield console.log('Hello Sagas!');
  return;
}

export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: ADD_ONE });
}


export function* watchIncrementAsync() {
  yield takeEvery(ADD_ONE_ASYNC, incrementAsync);
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ]);
} 