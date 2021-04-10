import * as React from 'react';
import Root from './src/root/root';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import userReducer from './src/store/reducers/user';

const rootReducer = combineReducers({
  user: userReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

export default App;
