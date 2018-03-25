import { call, put, takeEvery /* , takeLatest */ } from 'redux-saga/effects';
import Steam from '../../api/steam';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchInterfaces() {
    try {
        const result = yield call(Steam.getSupportedAPIList, { });
        yield put({ type: 'FETCH_INTERFACES_SUCCEEDED', interfaces: result.apilist.interfaces });
    } catch (e) {
        yield put({ type: 'FETCH_INTERFACES_FAILED', message: e.message });
    }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
    yield takeEvery('FETCH_INTERFACES', fetchInterfaces);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
/*
function* mySaga() {
    yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}
*/

export default mySaga;
