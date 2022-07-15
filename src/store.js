import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
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

import multiStepReducer from "./slices/multistep";
import registerReducer from "./slices/register";
import utilsReducer from "./slices/utils";

const reducers = combineReducers({
  multiStep: multiStepReducer,
  register: registerReducer,
  utils: utilsReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  whitelist: ["auth"],
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: true,
});

export default store;
