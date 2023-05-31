import { removeDuplicateBreakpoint } from "@utils/removeDuplicateBreakpoint";

export type BreakPointValueType = 320 | 425 | 540 | 768 | 912 | 1024 | 1440 | 2560;
export type EBREAKPOINTSType = Partial<{
  XS: number;
  SM: number;
  SMPlus: number;
  MD: number;
  MDPlus: number;
  LG: number;
  XL: number;
  XXL: number;
  XXXL: number;
  [key: string]: number;
}>;

const PredefinedBreakpoints: Partial<Record<keyof EBREAKPOINTSType, BreakPointValueType>> =
  Object.freeze({
    XS: 320,
    SM: 425,
    SMPlus: 540,
    MD: 768,
    MDPlus: 912,
    LG: 1024,
    XL: 1440,
    XXL: 2560,
  });

export const EBREAKPOINTS = removeDuplicateBreakpoint(PredefinedBreakpoints);
