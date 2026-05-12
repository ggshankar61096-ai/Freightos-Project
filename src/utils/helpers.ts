
/**
 * Check if value is empty/null/undefined
 */
export const isEmpty = (value: any): boolean => {
  return value === null || value === undefined || value === "";
};
