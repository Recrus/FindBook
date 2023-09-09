import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchVolumesAPI } from "../api/api";
import { VolumesSliceState } from "../../../types/types";
import { AxiosError } from "axios";

interface ErrorResponse {
  error: {
    message: string;
  };
}

export const fetchVolumes = createAsyncThunk(
  "volumes/fetchVolumes",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as { volumes: VolumesSliceState };
    const { searchKey, startIndex, category, order } = state.volumes;

    try {
      return await fetchVolumesAPI({
        searchKey,
        startIndex,
        category,
        order,
      });
    } catch (err) {
      const axiosError = err as AxiosError<ErrorResponse>;
      if (axiosError.response) {
        return thunkAPI.rejectWithValue(axiosError.response.data.error.message);
      } else {
        return thunkAPI.rejectWithValue("An unknown error occurred");
      }
    }
  },
);
