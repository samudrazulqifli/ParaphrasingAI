import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/auth";
import messageReducer from "../feature/message";

const reducer = {
  auth: authReducer,
  message: messageReducer,
};

export const store = configureStore({
  reducer: reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
