import steamKey from './steamkey'; // your own steam key should be exported from ./steamkey.js

const routes = {
    getAppDetails: 'http://store.steampowered.com/api/appdetails',
    getAppList: 'http://api.steampowered.com/ISteamApps/GetAppList/v0002/',
    getFriendList: 'http://api.steampowered.com/ISteamUser/GetFriendList/v0001/',
    getOwnedGames: 'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/',
    getPlayerSummariesV2: 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/',
    getSupportedAPIList: 'http://api.steampowered.com/ISteamWebAPIUtil/GetSupportedAPIList/v0001/',
    resolveVanityURL: 'http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/',
};

const delayTime = 3000;
const delayPromise = ms => new Promise(r => setTimeout(r, ms));

function getSupportedAPIList() {
    const args = {
        key: steamKey,
    };

    return fetch(routes.getSupportedAPIList, args)
        .then(response => response.json());
}

const steam = {
    getSupportedAPIList: () => delayPromise(delayTime).then(() => getSupportedAPIList()),
};

export default steam;
