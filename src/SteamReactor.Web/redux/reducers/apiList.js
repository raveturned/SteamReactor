import { interfaceActionName } from '../actions/steamApi';

const initialState = {
    interfaces: [],
};

export default function apiList(state = initialState, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }

    switch (action.type) {
    case interfaceActionName.ok:
        return {
            ...state,
            interfaces: [...action.payload],
        };
    case interfaceActionName.error: {
        console.log(interfaceActionName.error);
        console.log(action);
        return state;
    }
    default:
        return state;
    }
}
