const initialState = {
    interfaces: [],
};

export default function apiList(state = initialState, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }

    switch (action.type) {
    case 'ADD_INTERFACE':
        return {
            ...state,
            interfaces: [...state.interfaces, action.interface],
        };
    case 'FETCH_INTERFACES_SUCCEEDED':
        return {
            ...state,
            interfaces: [...action.interfaces],
        };
    case 'FETCH_INTERFACES_FAILED': {
        console.log('FETCH_INTERFACES_FAILED');
        console.log(action);
        return state;
    }
    default:
        return state;
    }
}
