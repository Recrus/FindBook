import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { Volume, VolumesSliceState } from "../../../types/types.ts";

interface FetchVolumeArgs {
  searchKey: string;
}

const apiKey = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

const initialState: VolumesSliceState = {
  volumes: [],
  loading: true,
  error: null,
};

export const fetchVolumes = createAsyncThunk(
  "volumes/fetchVolumes",
  async (args: FetchVolumeArgs, thunkAPI) => {
    const { searchKey } = args;
    const VOLUMES_URL = `${BASE_URL}volumes?q=${searchKey}&maxResults=30&key=${apiKey}`;
    try {
      const response = await axios.get<{ items: Volume[] }>(VOLUMES_URL);
      return [...response.data.items];
    } catch (err: unknown) {
      const axiosError = err as AxiosError;
      return thunkAPI.rejectWithValue(axiosError.message);
    }
  },
);

const volumesSlice = createSlice({
  name: "volumes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchVolumes.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      fetchVolumes.fulfilled,
      (state, action: PayloadAction<Volume[]>) => {
        state.loading = false;
        state.volumes = action.payload;
        state.error = null;
      },
    );
    builder.addCase(fetchVolumes.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "An unknown error occurred";
    });
  },
});

export const selectAllVolumes = (state: { volumes: VolumesSliceState }) =>
  state.volumes.volumes;
export const selectLoading = (state: { volumes: VolumesSliceState }) =>
  state.volumes.loading;
export const selectError = (state: { volumes: VolumesSliceState }) =>
  state.volumes.error;

export default volumesSlice.reducer;
