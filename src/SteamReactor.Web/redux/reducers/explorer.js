const initialState = {
    userId: -1,
    users: {
        ids: [],
        byId: {},
    },
};

export default function explorer(state = initialState, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }

    switch (action.type) {
    case 'FETCH_VANITY_SUCCEEDED': {
        console.log(action);
        const steamId = action.result.response.steamid;
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
    case 'FETCH_VANITY_FAILED': {
        console.log('FETCH_VANITY_FAILED');
        console.log(action);
        return state;
    }
    default:
        return state;
    }
}
