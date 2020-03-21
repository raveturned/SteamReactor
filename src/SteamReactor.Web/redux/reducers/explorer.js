import {
  vanityActionName, playerActionName, friendsActionName, appListActionName,
} from '../actions/steamApi';

const initialState = {
  userId: -1,
  users: {
    ids: [],
    byId: {},
  },
  allAppNames: [],
};

export default function explorer(state = initialState, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }

  switch (action.type) {
    case vanityActionName.ok: {
      // console.log(action);
      const steamId = action.payload;
      const newState = (state.users.ids.indexOf(steamId) !== -1) ? state
        : {
          ...state,
          userId: steamId,
          users: {
            ...state.users,
            byId: {
              ...state.users.byId,
              [steamId]: {
                id: steamId,
                hasDetail: false,
              },
            },
            ids: [...state.users.ids, steamId],
          },
        };
      return newState;
    }
    case vanityActionName.error: {
      console.log(vanityActionName.error);
      console.log(action);
      return state;
    }
    case playerActionName.ok: {
      // console.log(action);
      let buildState = state;
      action.payload.forEach((player) => {
        const newPlayer = {
          id: player.steamid,
          hasDetail: true,
          name: player.personaname,
          avatar: player.avatar,
          avatarFull: player.avatarfull,
          avatarMedium: player.avatarmedium,
        };
        buildState = {
          ...buildState,
          users: {
            ...buildState.users,
            byId: {
              ...buildState.users.byId,
              [newPlayer.id]: newPlayer,
            },
          },
        };
      });
      const newState = buildState;
      return newState;
    }
    case playerActionName.error: {
      console.log(playerActionName.error);
      console.log(action);
      return state;
    }
    case friendsActionName.ok: {
      // console.log(action);
      const friends = action.payload;
      let buildState = state;
      friends.forEach((friend) => {
        const steamId = friend.steamid;
        buildState = (buildState.users.ids.indexOf(steamId) !== -1) ? buildState
          : {
            ...buildState,
            users: {
              ...buildState.users,
              byId: {
                ...buildState.users.byId,
                [steamId]: {
                  id: steamId,
                  hasDetail: false,
                },
              },
              ids: [...buildState.users.ids, steamId],
            },
          };
      });
      return buildState;
    }
    case friendsActionName.error: {
      console.log(friendsActionName.error);
      console.log(action);
      return state;
    }
    case appListActionName.ok: {
      console.log(action);
      const apps = action.payload;
      return {
        ...state,
        allAppNames: apps,
      };
    }
    case appListActionName.error: {
      console.log(appListActionName.error);
      console.log(action);
      return state;
    }
    default:
      return state;
  }
}
