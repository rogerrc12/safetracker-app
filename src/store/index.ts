import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import baseApi from "@src/api/baseApi";

const store = configureStore({
  reducer: {
    ...rootReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  devTools: __DEV__,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([baseApi.middleware]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
