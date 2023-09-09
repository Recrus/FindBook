import { VolumesSliceState } from "../../../types/types.ts";

export const selectAllVolumes = (state: { volumes: VolumesSliceState }) =>
  state.volumes.volumes;

export const selectLoading = (state: { volumes: VolumesSliceState }) =>
  state.volumes.loading;

export const selectError = (state: { volumes: VolumesSliceState }) =>
  state.volumes.error;

export const selectSearchKey = (state: { volumes: VolumesSliceState }) =>
  state.volumes.searchKey;

export const selectCategory = (state: { volumes: VolumesSliceState }) =>
  state.volumes.category;

export const selectOrder = (state: { volumes: VolumesSliceState }) =>
  state.volumes.order;

export const selectTotalItems = (state: { volumes: VolumesSliceState }) =>
  state.volumes.totalItems;
