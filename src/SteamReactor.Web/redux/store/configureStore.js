import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState, sagaMiddleware) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(sagaMiddleware),
    );
}
