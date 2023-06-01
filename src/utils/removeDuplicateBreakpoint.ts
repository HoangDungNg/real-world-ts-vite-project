import { BREAKPOINTSType, BreakPointValueType } from "@constant";

function removeDuplicateBreakpoint(obj: BREAKPOINTSType): BREAKPOINTSType {
  const valueSet = new Set<BreakPointValueType>();
  const result: BREAKPOINTSType = {};

  for (const [key, value] of Object.entries(obj)) {
    if (!valueSet.has(value as BreakPointValueType)) {
      result[key] = value;
      valueSet.add(value as BreakPointValueType);
    }
  }

  return result;
}

export { removeDuplicateBreakpoint };
