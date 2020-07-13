import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';

const rootReducers = combineReducers({
  auth,
  loading,
});

export function* rootSaga() {
  yield all([authSaga()]);
}
export default rootReducers;
