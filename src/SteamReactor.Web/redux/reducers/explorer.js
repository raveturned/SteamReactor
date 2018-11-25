const initialState = {
    userId: -1,
};

export default function explorer(state = initialState, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }

    switch (action.type) {
    case 'FETCH_VANITY_SUCCEEDED':
        console.log(action);
        return {
            ...state,
            userId: action.result.response.steamid,
        };
    case 'FETCH_VANITY_FAILED': {
        console.log('FETCH_VANITY_FAILED');
        console.log(action);
        return state;
    }
    default:
        return state;
    }
}
