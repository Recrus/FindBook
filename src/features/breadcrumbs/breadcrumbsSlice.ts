import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Breadcrumb, BreadcrumbState } from "../../../types/types.ts";

const initialState: BreadcrumbState = {
  breadcrumbs: [],
};

const breadcrumbSlice = createSlice({
  name: "breadcrumb",
  initialState,
  reducers: {
    addBreadcrumb(state, action: PayloadAction<Breadcrumb>) {
      state.breadcrumbs.push(action.payload);
    },
    removeLastBreadcrumb(state) {
      state.breadcrumbs.pop();
    },
    resetBreadcrumbs(state) {
      state.breadcrumbs = [];
    },
  },
});

export const { addBreadcrumb, removeLastBreadcrumb, resetBreadcrumbs } =
  breadcrumbSlice.actions;

export const selectBreadcrumbs = (state: { breadcrumb: BreadcrumbState }) =>
  state.breadcrumb.breadcrumbs;
export default breadcrumbSlice.reducer;
