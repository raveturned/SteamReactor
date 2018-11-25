const routes = {
    // getAppDetails: 'http://store.steampowered.com/api/appdetails',
    // getAppList: 'http://api.steampowered.com/ISteamApps/GetAppList/v0002/',
    // getFriendList: 'http://api.steampowered.com/ISteamUser/GetFriendList/v0001/',
    // getOwnedGames: 'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/',
    // getPlayerSummariesV2: 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/',
    getSupportedAPIList: '/api/steam/api',
    resolveVanityURL: '/api/steam/resolve',
};

const delayTime = 3000;
const delayPromise = ms => new Promise(r => setTimeout(r, ms));

function getSupportedAPIList() {
    const uri = routes.getSupportedAPIList;
    const args = {};

    return fetch(uri, args)
        .then(response => response.json());
}

function resolveVanityURL(steamId) {
    const uri = `${routes.resolveVanityURL}/${steamId}`;
    const args = {};

    return fetch(uri, args)
        .then(response => response.json());
}

const steam = {
    getSupportedAPIList: () => delayPromise(delayTime).then(() => getSupportedAPIList()),
    resolveVanityURL: action => delayPromise(delayTime)
        .then(() => resolveVanityURL(action.steamId)),
};

export default steam;
