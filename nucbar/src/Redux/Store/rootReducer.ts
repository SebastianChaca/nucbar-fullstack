import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  cartReducer,
  productReducer,
  userReducer,
  sidebarReducer,
  statsReducer,
} from '../Reducers';
const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart', 'user'],
};

const reducers = combineReducers({
  cart: cartReducer,
  user: userReducer,
  products: productReducer,
  stats: statsReducer,
  sidebars: sidebarReducer,
});
export type RootState = ReturnType<typeof reducers>;

export default persistReducer(persistConfig, reducers);
