import { BREAKPOINTS, BREAKPOINTS_STRING } from "@constant";

const getBreakPoint = (breakpoint: keyof typeof BREAKPOINTS_STRING) => {
  return BREAKPOINTS[breakpoint] as number;
};

const getBreakPointString = (breakpoint: keyof typeof BREAKPOINTS_STRING) => {
  return `@media (min-width: ${BREAKPOINTS[breakpoint]})`;
};

export { getBreakPoint, getBreakPointString };
