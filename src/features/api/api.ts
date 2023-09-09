import axios from "axios";
import { FetchVolumesParams, Volume } from "../../../types/types.ts";

export const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchVolumesAPI = async (params: FetchVolumesParams) => {
  const { searchKey, startIndex, category, order } = params;

  const VOLUMES_URL = `${BASE_URL}volumes?q=${searchKey}+subject:${category}&orderBy=${order}&maxResults=30&startIndex=${startIndex}`;

  const response = await axios.get<{
    items?: Volume[];
    totalItems: number;
    kind: string;
  }>(VOLUMES_URL);

  return response.data;
};
