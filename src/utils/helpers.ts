/**
 * Format character status with proper styling
 */
export const formatCharacterStatus = (status: string): string => {
  return status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
};

/**
 * Truncate text to specified length
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

/**
 * Check if value is empty/null/undefined
 */
export const isEmpty = (value: any): boolean => {
  return value === null || value === undefined || value === "";
};
