// services/api.ts
import axios from "axios";
import { ApiResponse, FetchParams, Character } from "@/types";
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

/**
 * Fetch a single character by ID
 * @param id - Character ID
 * @returns Single character data
 */
export const fetchCharacterById = async (id: string | number): Promise<Character> => {
  try {
    const response = await apiClient.get<Character>(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch character with ID ${id}:`, error);
    throw error;
  }
};

/**
 * Fetch multiple characters by IDs
 * @param ids - Array of character IDs
 * @returns Array of character data
 */
export const fetchCharactersByIds = async (
  ids: (string | number)[]
): Promise<Character[]> => {
  try {
    const response = await apiClient.get<Character | Character[]>(`/${ids.join(",")}`);
    return Array.isArray(response.data) ? response.data : [response.data];
  } catch (error) {
    console.error("Failed to fetch characters by IDs:", error);
    throw error;
  }
};