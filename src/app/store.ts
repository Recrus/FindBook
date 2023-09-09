import { configureStore } from "@reduxjs/toolkit";
import volumesReducer from "../features/volumes/volumesSlice.ts";
import breadcrumbsReducer from "../features/breadcrumbs/breadcrumbsSlice.ts";

export const store = configureStore({
  reducer: {
    volumes: volumesReducer,
    breadcrumb: breadcrumbsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
