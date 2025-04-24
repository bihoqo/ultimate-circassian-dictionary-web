// Utility function to clamp a value within a range
export const clampNumber = (value: number, min: number, max: number): number => {
  return Math.min(max, Math.max(min, value));
};
