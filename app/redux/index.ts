import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import constantSlice from "./constantSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  constants: constantSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const reduxStore = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// infer type from store
export type ReduxStateType = ReturnType<typeof reduxStore.getState>;
export type ReduxDispatchType = typeof reduxStore.dispatch;

export default reduxStore;
