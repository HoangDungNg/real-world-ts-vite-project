import { removeDuplicateBreakpoint } from "@utils/removeDuplicateBreakpoint";

export type BreakPointValueType = 320 | 425 | 540 | 768 | 912 | 1024 | 1440 | 2560;
export type BREAKPOINTSType = Partial<{
  XS: number | string;
  SM: number | string;
  SMPlus: number | string;
  MD: number | string;
  MDPlus: number | string;
  LG: number | string;
  XL: number | string;
  XXL: number | string;
  XXXL: number | string;
  [key: string]: number | string;
}>;

const PredefinedBreakpoints: Partial<Record<keyof BREAKPOINTSType, BreakPointValueType>> =
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

export const BREAKPOINTS = removeDuplicateBreakpoint(PredefinedBreakpoints);
export const BREAKPOINTS_STRING = Object.keys(BREAKPOINTS).reduce((obj, key) => {
  obj[key] = key;
  return obj;
}, {} as BREAKPOINTSType);
