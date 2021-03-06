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
import authReducer from "./slices/auth";
import utilsReducer from "./slices/utils";

const persistConfig = {
  key: "root",
  version: 1,
  whitelist: ["auth"],
  storage,
};

const reducers = combineReducers({
  multiStep: multiStepReducer,
  auth: authReducer,
  utils: utilsReducer,
});

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

// const store = createStore(
//   persistedReducer,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;
