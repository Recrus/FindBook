import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Volume, VolumesSliceState } from "../../../types/types.ts";
import { fetchVolumes } from "./volumesThunk.ts";

const initialState: VolumesSliceState = {
  volumes: [],
  totalItems: null,
  category: "",
  order: "relevance",
  searchKey: "",
  loading: true,
  error: null,
  startIndex: 0,
};

const volumesSlice = createSlice({
  name: "volumes",
  initialState,
  reducers: {
    setSearchKey: (state, action: PayloadAction<string>) => {
      state.searchKey = action.payload;
      state.startIndex = 0;
    },
    loadMore: (state) => {
      state.startIndex += 30;
    },
    setSearchCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
      state.startIndex = 0;
    },
    setSearchOrder: (state, action: PayloadAction<string>) => {
      state.order = action.payload;
      state.startIndex = 0;
    },
    resetAction: (state) => {
      state.searchKey = initialState.searchKey;
      state.category = initialState.category;
      state.order = initialState.order;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVolumes.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      fetchVolumes.fulfilled,
      (
        state,
        action: PayloadAction<{
          items?: Volume[];
          totalItems: number;
          kind: string;
        }>,
      ) => {
        state.loading = false;
        state.totalItems = action.payload.totalItems;

        const newVolumes = action.payload.items ?? [];
        if (state.startIndex === 0) {
          state.volumes = newVolumes;
        } else {
          state.volumes = [...state.volumes, ...newVolumes];
        }

        state.error = null;
      },
    );
    builder.addCase(fetchVolumes.rejected, (state, action) => {
      state.loading = true;
      state.error = (action.payload as string) || "An unknown error occurred";
    });
  },
});

export const {
  setSearchKey,
  loadMore,
  setSearchCategory,
  resetAction,
  setSearchOrder,
} = volumesSlice.actions;

export default volumesSlice.reducer;
