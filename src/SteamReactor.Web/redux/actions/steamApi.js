export const appListActionName = {
    error: 'FETCH_APPLIST_ERROR',
    fetch: 'FETCH_APPLIST',
    ok: 'FETCH_APPLIST_OK',
};

export const friendsActionName = {
    error: 'FETCH_FRIENDS_ERROR',
    fetch: 'FETCH_FRIENDS',
    ok: 'FETCH_FRIENDS_OK',
};

export const interfaceActionName = {
    error: 'FETCH_INTERFACES_ERROR',
    fetch: 'FETCH_INTERFACES',
    ok: 'FETCH_INTERFACES_OK',
};

export const vanityActionName = {
    error: 'FETCH_VANITY_ERROR',
    fetch: 'FETCH_VANITY',
    ok: 'FETCH_VANITY_OK',
};

export const playerActionName = {
    error: 'FETCH_PLAYER_ERROR',
    fetch: 'FETCH_PLAYER',
    ok: 'FETCH_PLAYER_OK',
};

export function fetchAppListError(errorMessage) {
    return { type: appListActionName.error, payload: errorMessage };
}

export function fetchAppList() {
    return { type: appListActionName.fetch };
}

export function fetchAppListOk(apps) {
    return { type: appListActionName.ok, payload: apps };
}

export function fetchFriendsError(errorMessage) {
    return { type: friendsActionName.error, payload: errorMessage };
}

export function fetchFriends(steamId) {
    return { type: friendsActionName.fetch, payload: steamId };
}

export function fetchFriendsOk(friends) {
    return { type: friendsActionName.ok, payload: friends };
}

export function fetchInterfacesError(errorMessage) {
    return { type: interfaceActionName.error, payload: errorMessage };
}

export function fetchInterfaces() {
    return { type: interfaceActionName.fetch };
}

export function fetchInterfacesOk(interfaces) {
    return { type: interfaceActionName.ok, payload: interfaces };
}

export function fetchVanity(vanityUrl) {
    return { type: vanityActionName.fetch, payload: vanityUrl };
}

export function fetchVanityOk(steamId) {
    return { type: vanityActionName.ok, payload: steamId };
}

export function fetchVanityError(errorMessage) {
    return { type: vanityActionName.error, payload: errorMessage };
}

export function fetchPlayer(steamId) {
    return { type: playerActionName.fetch, payload: steamId };
}

export function fetchPlayerOk(result) {
    return { type: playerActionName.ok, payload: result };
}

export function fetchPlayerError(errorMessage) {
    return { type: playerActionName.error, payload: errorMessage };
}
