import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { apiMiddleware } from './middleware/api/middleware';
import { createLogger } from 'redux-logger';
import makeRootReducer from './reducers';


const configureStore = function (initialState = {}) {
  const middleware = [createLogger(), thunkMiddleware, apiMiddleware];
  const store: StoreWithAsyncReducers<any> = createStore(
    makeRootReducer(),
    initialState,
    compose(applyMiddleware(...middleware))
  );

  store.asyncReducers = {};

  return store;
};

export default configureStore;
