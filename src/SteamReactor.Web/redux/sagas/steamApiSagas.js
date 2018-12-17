import {
    call, put, takeEvery, takeLatest, all,
} from 'redux-saga/effects';
import Steam from '../../api/steam';
import {
    friendsActionName, fetchFriends, fetchFriendsOk, fetchFriendsError,
    interfaceActionName, fetchInterfacesOk, fetchInterfacesError,
    vanityActionName, fetchVanityOk, fetchVanityError,
    playerActionName, fetchPlayer, fetchPlayerOk, fetchPlayerError,
} from '../actions/steamApi';

// interfaces
function* fetchInterfacesSaga() {
    try {
        const result = yield call(Steam.getSupportedAPIList, { });
        yield put(fetchInterfacesOk(result.apilist.interfaces));
    } catch (e) {
        yield put(fetchInterfacesError(e.message));
    }
}

function* watchInterfaces() {
    yield takeEvery(interfaceActionName.fetch, fetchInterfacesSaga);
}

// vanity
function* fetchVanitySaga(action) {
    try {
        const result = yield call(Steam.resolveVanityURL, action.payload);
        const steamId = result.response.steamid;
        yield put(fetchVanityOk(steamId));
        yield put(fetchPlayer(steamId));
        yield put(fetchFriends(steamId));
    } catch (e) {
        yield put(fetchVanityError(e.message));
    }
}

function* watchVanity() {
    yield takeLatest(vanityActionName.fetch, fetchVanitySaga);
}

// player
function* fetchPlayerSaga(action) {
    try {
        const result = yield call(Steam.getPlayer, action.payload);
        const { players } = result.response;
        yield put(fetchPlayerOk(players));
    } catch (e) {
        yield put(fetchPlayerError(e.message));
    }
}

function* watchPlayer() {
    yield takeEvery(playerActionName.fetch, fetchPlayerSaga);
}

// friends
function* fetchFriendsSaga(action) {
    console.log(action);
    try {
        const result = yield call(Steam.getFriends, action.payload);
        const { friends } = result.friendslist;
        yield put(fetchFriendsOk(friends));
        yield all(friends.map(friend => put(fetchPlayer(friend.steamid))));
    } catch (e) {
        yield put(fetchFriendsError(e.message));
    }
}

function* watchFriends() {
    yield takeLatest(friendsActionName.fetch, fetchFriendsSaga);
}

export default function* rootSaga() {
    yield all([
        watchFriends(),
        watchInterfaces(),
        watchPlayer(),
        watchVanity(),
    ]);
}
