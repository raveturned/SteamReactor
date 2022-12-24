import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState, sagaMiddleware) {
  /* eslint-disable no-underscore-dangle */
  const enhancers = compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  /* eslint-enable */

  return createStore(
    rootReducer,
    initialState,
    enhancers,
  );
}
