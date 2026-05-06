export const CHARACTER_STATUS = {
  ALIVE: "alive",
  DEAD: "dead",
  UNKNOWN: "unknown",
} as const;

export const CHARACTER_STATUS_DISPLAY = {
  [CHARACTER_STATUS.ALIVE]: "Alive",
  [CHARACTER_STATUS.DEAD]: "Dead",
  [CHARACTER_STATUS.UNKNOWN]: "Unknown",
} as const;
