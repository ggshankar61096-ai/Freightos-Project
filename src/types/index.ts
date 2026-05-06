/**
 * Character type definition
 */
export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type?: string;
  gender?: string;
  image: string;
  origin: {
    name: string;
    url?: string;
  };
  location: {
    name: string;
    url?: string;
  };
  url?: string;
  created?: string;
}

/**
 * API pagination info
 */
export interface PaginationInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

/**
 * API response structure
 */
export interface ApiResponse {
  info: PaginationInfo;
  results: Character[];
}

/**
 * Query parameters for character search
 */
export interface FetchParams {
  page: number;
  name: string;
  status: string;
}