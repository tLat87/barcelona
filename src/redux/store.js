import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { persistConfig } from './persistConfig';
import { combineReducers } from 'redux';
import balanceReducer from './slices/balanceSlice';
import purchasesReducer from './slices/purchasesSlice';
import settingsReducer from './slices/settingsSlice';

const rootReducer = combineReducers({
  balance: balanceReducer,
  purchases: purchasesReducer,
  settings: settingsReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
