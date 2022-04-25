import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import productReducer from "./reducers/product-reducer";
import authReducer from "./reducers/auth-reducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
  productReducer,
  authReducer
});

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const enhanceMiddleware = applyMiddleware(thunk);
const composeMiddleware = compose(enhanceMiddleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const store = createStore(
  persistedReducer,
  undefined,
  composeMiddleware
);

export const persistor = persistStore(store);
export default store;
