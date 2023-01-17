import 'whatwg-fetch';

const routes = {
  // getAppDetails: 'http://store.steampowered.com/api/appdetails',
  getAppList: '/api/steam/apps',
  getFriends: '/api/steam/friends',
  getOwnedGames: '/api/steam/games',
  getPlayerSummary: '/api/steam/player-summary',
  getSupportedAPIList: '/api/steam/api',
  resolveVanityURL: '/api/steam/resolve',
};

const delayTime = 0; // 1000;
const delayPromise = (ms) => new Promise((r) => {
  setTimeout(r, ms);
});

const getSupportedAPIList = () => {
  const uri = routes.getSupportedAPIList;
  const args = {};

  return window.fetch(uri, args)
    .then((response) => response.json());
};

const resolveVanityURL = (vanityUrl) => {
  const uri = `${routes.resolveVanityURL}/${vanityUrl}`;
  const args = {};

  return window.fetch(uri, args)
    .then((response) => response.json());
};

const getPlayerSummary = (steamId) => {
  const uri = `${routes.getPlayerSummary}/${steamId}`;
  const args = {};

  return window.fetch(uri, args)
    .then((response) => response.json());
};

const getFriends = (steamId) => {
  const uri = `${routes.getFriends}/${steamId}`;
  const args = {};

  return window.fetch(uri, args)
    .then((response) => response.json());
};

const getAppList = () => {
  const uri = `${routes.getAppList}`;
  const args = {};

  return window.fetch(uri, args)
    .then((response) => response.json());
};

const getOwnedGames = (steamId) => {
  const uri = `${routes.getOwnedGames}/${steamId}`;
  const args = {};

  return window.fetch(uri, args)
    .then((response) => response.json());
};

const steam = {
  getSupportedAPIList: () => delayPromise(delayTime)
    .then(() => getSupportedAPIList()),
  resolveVanityURL: (payload) => delayPromise(delayTime)
    .then(() => resolveVanityURL(payload)),
  getPlayerSummary: (payload) => delayPromise(delayTime)
    .then(() => getPlayerSummary(payload)),
  getFriends: (payload) => delayPromise(delayTime)
    .then(() => getFriends(payload)),
  getAppList: () => delayPromise(delayTime)
    .then(() => getAppList()),
  getOwnedGames: (payload) => delayPromise(delayTime)
    .then(() => getOwnedGames(payload)),
};

export default steam;
