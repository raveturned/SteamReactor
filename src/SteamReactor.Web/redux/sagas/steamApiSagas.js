import {
    call, put, takeEvery, takeLatest, all,
} from 'redux-saga/effects';
import Steam from '../../api/steam';

// worker Saga: will be fired on FETCH_INTERFACES actions
function* fetchInterfaces() {
    try {
        const result = yield call(Steam.getSupportedAPIList, { });
        yield put({ type: 'FETCH_INTERFACES_SUCCEEDED', interfaces: result.apilist.interfaces });
    } catch (e) {
        yield put({ type: 'FETCH_INTERFACES_FAILED', message: e.message });
    }
}

/*
  Starts fetchInterfaces on each dispatched `FETCH_INTERFACES` action.
  Allows concurrent fetches of interfaces.
*/
function* watchInterfaces() {
    yield takeEvery('FETCH_INTERFACES', fetchInterfaces);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of interfaces. If "FETCH_INTERFACES" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
/*
function* mySaga() {
    yield takeLatest("FETCH_INTERFACES", fetchInterfaces);
}
*/

// worker Saga: will be fired on FETCH_INTERFACES actions
function* fetchVanity(action) {
    try {
        const result = yield call(Steam.resolveVanityURL, { steamId: action.steamId });
        yield put({ type: 'FETCH_VANITY_SUCCEEDED', result });
    } catch (e) {
        yield put({ type: 'FETCH_VANITY_FAILED', message: e.message });
    }
}

function* watchVanity() {
    yield takeLatest('FETCH_VANITY', fetchVanity);
}

export default function* rootSaga() {
    yield all([
        watchInterfaces(),
        watchVanity(),
    ]);
}
