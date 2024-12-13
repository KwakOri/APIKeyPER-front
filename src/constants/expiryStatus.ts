export const Status = {
  EXPIRED: "expired",
  DANGEROUS: "dangerous",
  WARNING: "warning",
  SAFE: "safe",
} as const;

export type TStatus = typeof Status[keyof typeof Status];
