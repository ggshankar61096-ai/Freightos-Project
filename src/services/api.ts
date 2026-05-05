// services/api.ts
import axios from "axios";
import { ApiResponse, FetchParams } from "../types";

const BASE_URL = "https://rickandmortyapi.com/api/character";

export const fetchCharacters = async (
  params: FetchParams
): Promise<ApiResponse> => {
  const res = await axios.get<ApiResponse>(BASE_URL, { params });
  return res.data;
};