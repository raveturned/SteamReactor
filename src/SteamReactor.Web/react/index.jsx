import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from '../redux/sagas/steamApiSagas';
import App from './components/app';
import configureStore from '../redux/store/configureStore';

const initialState = { apiList: { interfaces: [] } };
const sagaMiddleware = createSagaMiddleware();
const store = configureStore(initialState, sagaMiddleware);

// then run the saga
sagaMiddleware.run(mySaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'), // eslint-disable-line no-undef
);
