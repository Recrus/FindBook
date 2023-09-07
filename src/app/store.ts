import { configureStore } from "@reduxjs/toolkit";
import volumesReducer from "../features/volumes/volumesSlice.ts";

export const store = configureStore({
  reducer: {
    volumes: volumesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
