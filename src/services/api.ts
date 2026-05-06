// services/api.ts
import axios from "axios";
import { ApiResponse, FetchParams } from "@/types";
import { API_ENDPOINTS } from "@/constants/api";

const apiClient = axios.create({
  baseURL: API_ENDPOINTS.CHARACTERS,
  timeout: 10000,
});

/**
 * Fetch characters with optional filters
 * @param params - Query parameters (page, name, status)
 * @returns Character data with pagination info
 */
export const fetchCharacters = async (
  params: FetchParams
): Promise<ApiResponse> => {
  try {
    const response = await apiClient.get<ApiResponse>("", { params });
    return response.data;
  } catch (error) {
    console.error("Failed to fetch characters:", error);
    throw error;
  }
};