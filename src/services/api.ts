// services/api.ts
import axios from "axios";
import { ApiResponse, FetchParams, Character } from "@/types";
import { API_ENDPOINTS } from "@/constants/api";

const apiClient = axios.create({
  baseURL: API_ENDPOINTS.CHARACTERS,
  timeout: 10000,
});

// Fetch characters with optional filters API call
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

// Fetch a single character by ID

export const fetchCharacterById = async (id: string | number): Promise<Character> => {
  try {
    const response = await apiClient.get<Character>(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch character with ID ${id}:`, error);
    throw error;
  }
};

