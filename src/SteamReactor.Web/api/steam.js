import 'whatwg-fetch';

const routes = {
  // getAppDetails: 'http://store.steampowered.com/api/appdetails',
  getAppList: '/api/steam/apps',
  getFriends: '/api/steam/friends',
  getOwnedGames: '/api/steam/games',
  getPlayer: '/api/steam/player',
  getSupportedAPIList: '/api/steam/api',
  resolveVanityURL: '/api/steam/resolve',
};

const delayTime = 0; // 1000;
const delayPromise = (ms) => new Promise((r) => {
  setTimeout(r, ms);
});

function getSupportedAPIList() {
  const uri = routes.getSupportedAPIList;
  const args = {};

  return window.fetch(uri, args)
    .then((response) => response.json());
}

function resolveVanityURL(vanityUrl) {
  const uri = `${routes.resolveVanityURL}/${vanityUrl}`;
  const args = {};

  return window.fetch(uri, args)
    .then((response) => response.json());
}

function getPlayer(steamId) {
  const uri = `${routes.getPlayer}/${steamId}`;
  const args = {};

  return window.fetch(uri, args)
    .then((response) => response.json());
}

function getFriends(steamId) {
  const uri = `${routes.getFriends}/${steamId}`;
  const args = {};

  return window.fetch(uri, args)
    .then((response) => response.json());
}

function getAppList() {
  const uri = `${routes.getAppList}`;
  const args = {};

  return window.fetch(uri, args)
    .then((response) => response.json());
}

function getOwnedGames(steamId) {
  const uri = `${routes.getOwnedGames}/${steamId}`;
  const args = {};

  return window.fetch(uri, args)
    .then((response) => response.json());
}

const steam = {
  getSupportedAPIList: () => delayPromise(delayTime)
    .then(() => getSupportedAPIList()),
  resolveVanityURL: (payload) => delayPromise(delayTime)
    .then(() => resolveVanityURL(payload)),
  getPlayer: (payload) => delayPromise(delayTime)
    .then(() => getPlayer(payload)),
  getFriends: (payload) => delayPromise(delayTime)
    .then(() => getFriends(payload)),
  getAppList: () => delayPromise(delayTime)
    .then(() => getAppList()),
  getOwnedGames: (payload) => delayPromise(delayTime)
    .then(() => getOwnedGames(payload)),
};

export default steam;
