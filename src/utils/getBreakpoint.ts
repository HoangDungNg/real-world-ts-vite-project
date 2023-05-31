import { EBREAKPOINTS, EBREAKPOINTSType } from "@constant";

export const getBreakPoint = (breakpoint: keyof EBREAKPOINTSType) => {
  return EBREAKPOINTS[breakpoint] as number;
};
